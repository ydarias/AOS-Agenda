express = require 'express'
logger = require './logger'

mongoose = require 'mongoose'
mongoose.connect('localhost', 'weevent')

sessionSchema = new mongoose.Schema
  name: 'String'
  description: 'String'

eventSchema = new mongoose.Schema
  name: 'String'
  description: 'String',
  startDate:
    type: 'Date',
  endDate:
    type: 'Date',
  sessions: [ sessionSchema ]

Session = mongoose.model('Session', sessionSchema)

Event = mongoose.model('Event', eventSchema)

log = logger.factory.buildLogger logger.level.INFO

app = express()

allowCrossDomain = (req, res, next) ->
  res.header('Content-Type', 'application/json')
  res.header('Cache-Control', 'no-cache')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  next()

logAccess = (req, res, next) ->
  log.info 'Access on ' + req.path
  next()

app.configure( ->
  app.use express.bodyParser()
  app.use allowCrossDomain
  app.use logAccess
)

app.get('/api/events', (request, response) ->
  query = Event.find()
  query.exec (error, events) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining events list'
    else
      response.json events
)

app.post('/api/events', (request, response) ->
  event = new Event
    name: request.body.name
    description: request.body.description
    startDate: request.body.startDate
    endDate: request.body.endDate
  event.save (error) ->
    if error
      response.status 400
      response.json
        error: 'Error saving event'
    else
      response.json event
)

app.options('/api/events', (request, response) ->
  response.end 'OK'
)

app.get('/api/events/:eventId', (request, response) ->
  query = Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.json
        error: 'Error obtaining event with id ' + request.params.eventId
    else
      response.json event
)

app.post('/api/events/:eventId/session', (request, response) ->
  session = new Session
    name: request.body.name
    description: request.body.description
  Event.findById(request.params.eventId).exec((error, event) ->
    if error
      response.json
        error: 'Error creating session ' + session
    else
      event.sessions.push session
      event.save (error) ->
        if error
          response.status 400
          response.json
            error: 'Error saving the new session in the given event'
        else
          response.json session
  )
)

log.info 'Server is ready in port 8080'

app.listen 8080
express = require 'express'
logger = require './logger'

mongoose = require 'mongoose'
mongoose.connect('localhost', 'weevent')

eventSchema = new mongoose.Schema
  name: 'String'
  description: 'String'

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
      response.end JSON.stringify
        error: 'Error obtaining events list'
    else
      response.end JSON.stringify events
)

app.post('/api/events', (request, response) ->
  event = new Event
    name: request.body.name
    description: request.body.description
  event.save (error) ->
    if error
      response.end JSON.stringify
        error: 'Error saving event'
    else
      response.end JSON.stringify 'OK'
)

app.options('/api/events', (request, response) ->
  response.end 'OK'
)

app.get('/api/events/:eventId', (request, response) ->
  query = Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.end JSON.stringify
        error: 'Error obtaining event with id ' + request.params.eventId
    else
      response.end JSON.stringify event
)

log.info 'Server is ready in port 8080'

app.listen 8080
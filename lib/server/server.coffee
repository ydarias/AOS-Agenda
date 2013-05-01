express = require 'express'
logger = require './logger'
schema = require './schema'

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
  query = schema.Event.find()
  query.exec (error, events) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining events list'
    else
      response.json events
)

app.post('/api/events', (request, response) ->
  event = new schema.Event
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
  query = schema.Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining event with id ' + request.params.eventId
    else
      response.json event
)

app.post('/api/events/:eventId/session', (request, response) ->
  session = new schema.Session
    name: request.body.name
    description: request.body.description
  schema.Event.findById(request.params.eventId).exec((error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error creating session: event with id ' + request.params.eventId + ' does not exists'
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
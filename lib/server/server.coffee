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
  log.info 'Access on [' + req.method + '] ' + req.path
  next()

app.configure( ->
  app.use express.bodyParser()
  app.use allowCrossDomain
  app.use logAccess
)

listEvents = (request, response) ->
  query = schema.Event.find()
  query.exec (error, events) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining events list'
    else
      response.json events

app.get('/api/events', (request, response) ->
  listEvents request, response
)

app.get('/public/events', (request, response) ->
  listEvents request, response
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

app.put('/api/events/:eventId', (request, response) ->
  query = schema.Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error updating event with id ' + request.params.eventId
    else
      schema.Event.update {'_id': request.params.eventId}, { $set : request.body }, (error, result) ->
        log.error "Error updating event #{event._id}"
        response.status 400
        response.json
          error: 'Error updating event'
      response.json event

)

app.options('/api/events', (request, response) ->
  response.end 'OK'
)

getEvent = (request, response) ->
  query = schema.Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining event with id ' + request.params.eventId
    else
      response.json event

app.get('/api/events/:eventId', (request, response) ->
  getEvent request, response
)

app.get('/public/events/:eventId', (request, response) ->
  getEvent request, response
)

app.options('/api/events/:eventId', (request, response) ->
  response.end 'OK'
)

app.post('/api/events/:eventId/sessions', (request, response) ->
  session = new schema.Session
    name: request.body.name
    description: request.body.description
    date: request.body.date
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

app.get('/api/events/:eventId/sessions', (request, response) ->
  query = schema.Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining session for event with id ' + request.params.eventId
    else
      response.json event.sessions
)

app.options('/api/events/:eventId/sessions', (request, response) ->
  response.end 'OK'
)

app.get('/api/events/:eventId/stats', (request, response) ->
  query = schema.Event.findOne({'_id': request.params.eventId})
  query.exec (error, event) ->
    if error
      response.status 400
      response.json
        error: 'Error obtaining event with id ' + request.params.eventId
    else
      response.json
        sessionsNumber: event.sessions.length
)

app.options('/api/events/:eventId/stats', (request, response) ->
  response.end 'OK'
)

log.info 'Server is ready in port 8080'

app.listen 8080
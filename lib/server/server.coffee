express = require 'express'
data = require './data'
logger = require './logger'
eventService = require './eventService'

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
  app.use allowCrossDomain
  app.use express.bodyParser()
  app.use logAccess
)

app.get('/events', (request, response) ->
  output = JSON.stringify data.events
  response.end output
)

app.get('/events/:eventId', (request, response) ->
  event = eventService.findEvent request.param.eventId
  response.end JSON.stringify event
)

log.info 'Server is ready in port 8080'

app.listen 8080
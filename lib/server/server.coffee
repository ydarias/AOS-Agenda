express = require 'express'
data = require './data'

app = express()

allowCrossDomain = (req, res, next) ->
  res.header('Content-Type', 'application/json')
  res.header('Cache-Control', 'no-cache')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  next()

app.configure( ->
  app.use allowCrossDomain
  app.use express.bodyParser()
)

app.get('/events', (request, response) ->
  output = JSON.stringify data.events
  response.end output
)

app.listen 8080
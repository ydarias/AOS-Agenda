// Generated by CoffeeScript 1.3.3
(function() {
  var Event, allowCrossDomain, app, eventSchema, express, log, logAccess, logger, mongoose;

  express = require('express');

  logger = require('./logger');

  mongoose = require('mongoose');

  mongoose.connect('localhost', 'weevent');

  eventSchema = new mongoose.Schema({
    name: 'String',
    description: 'String'
  });

  Event = mongoose.model('Event', eventSchema);

  log = logger.factory.buildLogger(logger.level.INFO);

  app = express();

  allowCrossDomain = function(req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    return next();
  };

  logAccess = function(req, res, next) {
    log.info('Access on ' + req.path);
    return next();
  };

  app.configure(function() {
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
    return app.use(logAccess);
  });

  app.get('/api/events', function(request, response) {
    var query;
    query = Event.find();
    return query.exec(function(error, events) {
      if (error) {
        response.status(400);
        return response.end(JSON.stringify({
          error: 'Error obtaining events list'
        }));
      } else {
        return response.end(JSON.stringify(events));
      }
    });
  });

  app.post('/api/events', function(request, response) {
    var event;
    event = new Event({
      name: request.body.name,
      description: request.body.description
    });
    return event.save(function(error) {
      if (error) {
        response.status(400);
        return response.end(JSON.stringify({
          error: 'Error saving event'
        }));
      } else {
        return response.end(JSON.stringify(event));
      }
    });
  });

  app.options('/api/events', function(request, response) {
    return response.end('OK');
  });

  app.get('/api/events/:eventId', function(request, response) {
    var query;
    query = Event.findOne({
      '_id': request.params.eventId
    });
    return query.exec(function(error, event) {
      if (error) {
        return response.end(JSON.stringify({
          error: 'Error obtaining event with id ' + request.params.eventId
        }));
      } else {
        return response.end(JSON.stringify(event));
      }
    });
  });

  log.info('Server is ready in port 8080');

  app.listen(8080);

}).call(this);
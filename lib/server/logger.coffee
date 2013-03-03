loggerLevel =
  NONE: 0
  INFO: 1

class Logger
  constructor: (@level) ->

  info: (message) ->
    if (loggerLevel.INFO <= @level)
      console.log '[INFO] - ' + message

class LoggerFactory
  constructor: ->

  buildLogger: (level) ->
    new Logger level

module.exports.factory = new LoggerFactory
module.exports.level = loggerLevel

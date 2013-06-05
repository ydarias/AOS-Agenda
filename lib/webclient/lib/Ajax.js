var WeEvent = WeEvent || {};

WeEvent.Ajax = WeEvent.Ajax || {};

(function() {

    function listEvents(successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events',
            type: 'GET',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function getEvent(eventId, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + eventId,
            type: 'GET',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function getEventStats(eventId, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + eventId + '/stats',
            type: 'GET',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function saveEvent(event, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events',
            type: 'POST',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            data: event,
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function updateEvent(eventId, event, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + eventId,
            type: 'PUT',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            data: event,
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function listSessions(eventId, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + eventId + '/sessions',
            type: 'GET',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    function saveSession(eventId, session, successCallback, errorCallback) {
        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + eventId + '/sessions',
            type: 'POST',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            data: session,
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });
    }

    WeEvent.Ajax.listEvents = listEvents;
    WeEvent.Ajax.getEvent = getEvent;
    WeEvent.Ajax.getEventStats = getEventStats;
    WeEvent.Ajax.saveEvent = saveEvent;
    WeEvent.Ajax.updateEvent = updateEvent;
    WeEvent.Ajax.listSessions = listSessions;
    WeEvent.Ajax.saveSession = saveSession;
})()
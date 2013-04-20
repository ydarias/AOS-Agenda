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


    WeEvent.Ajax.listEvents = listEvents;
    WeEvent.Ajax.saveEvent = saveEvent;
})()
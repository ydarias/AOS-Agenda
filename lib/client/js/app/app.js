window.App = window.App || {};

window.JST = {};
window.JST.escapeExpression = Handlebars.Utils.escapeExpression;

App.template = function (name, data) {
    return JST[name](data);
}

var WeEvent = WeEvent || {};

WeEvent.Configuration = WeEvent.Configuration || {};
(function() {
    WeEvent.Configuration.baseURL = 'http://localhost:8080/public';
    WeEvent.Configuration.timeout = 30000;
    WeEvent.Configuration.dateFormat = 'dd/MM/yyyy';
    WeEvent.Configuration.dateTimeFormat = 'dd/MM/yyyy hh:mm';
    WeEvent.Configuration.parseDateTimeFormat = 'DD/MM/YYYY HH:mm';
    WeEvent.Configuration.parseDatePickerFormat = 'DD/MM/YYYY';   // TODO delete this reference and use momentDateFormat
    WeEvent.Configuration.momentDateFormat = 'DD/MM/YYYY';
    WeEvent.Configuration.momentDateTimeFormat = 'DD/MM/YYYY HH:mm';
})();

var Ajax = Ajax || {};

(function() {
    function loadEvents(successCallback, errorCallback) {
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

    function loadEvent(eventId, successCallback, errorCallback) {
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

    Ajax.loadEvents = loadEvents;
    Ajax.loadEvent = loadEvent;
})();

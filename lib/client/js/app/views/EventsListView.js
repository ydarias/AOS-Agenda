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

var App = App || {};

(function() {
    App.EventListView = Backbone.View.extend({

    render : function () {
        var that = this;

        function successCallback(data) {
            var context = {
                events : data
            };
            that.$el.html(App.template("eventList", context));
        }

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

});
})();

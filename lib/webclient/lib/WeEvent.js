var WeEvent = WeEvent || {};

WeEvent.template = function (name, data) {
    return JST[name](data);
}

WeEvent.Configuration = WeEvent.Configuration || {};
(function() {
    WeEvent.Configuration.baseURL = 'http://localhost:8080/api';
    WeEvent.Configuration.timeout = 30000;
    WeEvent.Configuration.dateFormat = 'dd/MM/yyyy';
    WeEvent.Configuration.datePickerFormat = 'DD/MM/YYYY';
})();

WeEvent.Moment = WeEvent.Moment || {};
(function() {
    function parseRange(dateRange) {
        var ranges = dateRange.split(" - ");
        return {
            start: moment.utc(ranges[0], WeEvent.Configuration.datePickerFormat).toDate(),
            end: moment.utc(ranges[1], WeEvent.Configuration.datePickerFormat).toDate()
        };
    }

    WeEvent.Moment.parseRange = parseRange;
})();

WeEvent.Router = Backbone.Router.extend({

    routes: {
        "event/:eventId/sessions": "eventSessions",
        "event/:eventId/dashboard": "eventDashboard",
        "event/:eventId": "eventDashboard",
        "*path": "listEvents"
    },

    listEvents: function() {
        var title = new WeEvent.UI.MainTitleView({
            el: '#pageTitleAttachmentPoint'
        });
        title.render();
        var listEventsView = new WeEvent.UI.ListEventsView({
            el: '#contentAttachmentPoint'
        });
        listEventsView.render();
    },

    eventDashboard: function(eventId) {
        var title = new WeEvent.UI.MainTitleView({
            el: '#pageTitleAttachmentPoint'
        });
        title.render(eventId);
        var eventDashboardView = new WeEvent.UI.EventDashboardView({
            el: '#contentAttachmentPoint',
            eventId: eventId,
            activeLabel: '#eventDashboard'
        });
        eventDashboardView.render();
    },

    eventSessions: function(eventId) {
        var title = new WeEvent.UI.MainTitleView({
            el: '#pageTitleAttachmentPoint'
        });
        title.render(eventId);
        var eventSessionsView = new WeEvent.UI.EventSessionsView({
            el: '#contentAttachmentPoint',
            eventId: eventId,
            activeLabel: '#eventSessions'
        });
        eventSessionsView.render();
    }

});
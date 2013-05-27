var WeEvent = WeEvent || {};

(function() {
    var titleView = new WeEvent.UI.MainTitleView({
        el: '#pageTitleAttachmentPoint'
    });

    var listEventsView = new WeEvent.UI.ListEventsView({
        el: '#contentAttachmentPoint'
    });

    var eventDashboardView = new WeEvent.UI.EventDashboardView({
        el: '#contentAttachmentPoint',
        activeLabel: '#eventDashboard'
    });

    var eventSessionsView = new WeEvent.UI.EventSessionsView({
        el: '#contentAttachmentPoint',
        activeLabel: '#eventSessions'
    });

    WeEvent.Router = Backbone.Router.extend({

        routes: {
            "event/:eventId/sessions": "eventSessions",
            "event/:eventId/dashboard": "eventDashboard",
            "event/:eventId": "eventDashboard",
            "*path": "listEvents"
        },

        listEvents: function() {
            $('.daterangepicker').remove();

            titleView.render();
            listEventsView.render();
        },

        eventDashboard: function(eventId) {
            $('.daterangepicker').remove();

            titleView.render(eventId);
            eventDashboardView.eventId = eventId;
            eventDashboardView.render();
        },

        eventSessions: function(eventId) {
            $('.daterangepicker').remove();

            titleView.render(eventId);
            eventSessionsView.eventId = eventId;
            eventSessionsView.render();
        }

    });
})();
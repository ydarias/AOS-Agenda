var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({

        events: {
            "click #editEventButton": "showEditEventForm",
            "click #cancel-edit-event-button": "showEventData"
        },

        onRender: function() {
            var that = this;

            function onSuccessStatsLoad(stats) {
                var html = WeEvent.template("eventDashboard", stats);
                $('#eventContentAttachmentPoint').html(html);

                that.showEventData();
            }

            WeEvent.Ajax.getEventStats(this.eventId, onSuccessStatsLoad);

            return this;
        },

        showEventData: function() {
            var eventForm = new WeEvent.UI.DisabledEventFormView({
                el: '#eventMainData',
                eventId: this.eventId
            });
            eventForm.render();
        },

        showEditEventForm: function() {
            var editEventForm = new WeEvent.UI.EditEventFormView({
                el: '#eventMainData',
                eventId: this.eventId
            });
            editEventForm.render();
        }
    });

})();
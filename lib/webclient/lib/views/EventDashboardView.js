var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    function enableSubmitButton() {
        var $element = $('#submit-edit-event-button');
        if ($element)
            $element.removeClass('disabled');
    }

    function disableSubmitButton() {
        var $element = $('#submit-edit-event-button');
        if ($element)
            $element.addClass('disabled');
    }

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({

        events: {
            "click #editEventButton": "showEditEventForm",
            "click #cancel-edit-event-button": "showEventData",
            "click #submit-edit-event-button": "submitEventData"
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
        },

        submitEventData: function() {
            var that = this;

            function onSubmitEventSuccess() {
                that.showEventData();
            }

            disableSubmitButton();
            try {
                var event = new WeEvent.Model.EventSummary({
                    name: $('#eventName').val(),
                    description: $('#eventDescription').val(),
                    dateRange: '21/06/2013 - 22/06/2013'
                });
                WeEvent.Ajax.updateEvent(this.eventId, JSON.stringify(event), onSubmitEventSuccess);
            } catch (errors) {
                var html = WeEvent.template("errorBlock", {errors: errors});
                $('#form-errors').html(html);
                enableSubmitButton();
            }
        }
    });

})();
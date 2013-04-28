var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {
    function disableAddEventButton() {
        $('#add-event-button').addClass('disabled');
    }

    function enableAddEventButton() {
        $('#add-event-button').removeClass('disabled');
    }

    function cleanAddEventForm() {
        $('#form-errors').html('');
        $('#add-event-form form')[0].reset();
    }

    function hideAddEvent() {
        cleanAddEventForm();
        $('#add-event-form').hide(500, enableAddEventButton);
    }

    function disableSubmitButton() {
        var $element = $('#submit-event-button');
        if ($element)
            $element.addClass('disabled');
    }

    function enableSubmitButton() {
        var $element = $('#submit-event-button');
        if ($element)
            $element.removeClass('disabled');
    }

    function getEventHtml(event) {
        return WeEvent.template("event", {
            name: event.name,
            description: event.description,
            startDate: moment(event.startDate).format(WeEvent.Configuration.datePickerFormat),
            endDate: moment(event.endDate).format(WeEvent.Configuration.datePickerFormat),
            id: event._id
        });
    }

    function onLoadEventsSuccess(data) {
        var $list = $('#events-list');
        $list.html('');
        _.forEach(data, function(event) {
            $list.append(getEventHtml(event));
        });
    }

    function onLoadEventsError() {
        $.noty({
            text: 'Oopss, we are embarrased something is wrong :-(',
            layout: 'top',
            type: 'error'
        });
    }

    function onSubmitEventSuccess(data) {
        hideAddEvent();
        $.noty({
            text: 'Nice!, your event was created.',
            layout: 'top',
            type: 'information'
        });

        var $list = $('#events-list');
        $list.append(getEventHtml(data));

        enableSubmitButton();
    }

    function onSubmitEventError() {
        $.noty({
            text: 'Oopss, we are embarrased something is wrong :-(',
            layout: 'top',
            type: 'error'
        });

        enableSubmitButton();
    }

    WeEvent.UI.ListEventsView = Backbone.View.extend({

        events: {
            "click #add-event-button": "displayAddEvent",
            "click #refresh-events-button": "render",
            "click #submit-event-button": "submitEvent",
            "click #cancel-button": "cancelButtonEvent"
        },

        render: function() {
            var html = WeEvent.template("listEvents", {});
            this.$el.html(html);

            $('#dateRange').daterangepicker({
                format: WeEvent.Configuration.dateFormat
            });

            this.loadEvents();

            return this;
        },

        loadEvents: function() {
            WeEvent.Ajax.listEvents(onLoadEventsSuccess, onLoadEventsError);
        },

        displayAddEvent: function() {
            disableAddEventButton();
            $('#add-event-form').show(500);
        },

        submitEvent: function() {
            disableSubmitButton();

            try {
                var event = new WeEvent.Model.EventSummary({
                    name: $('#eventName').val(),
                    description: $('#eventDescription').val(),
                    dateRange: $('#dateRange').val()
                });

                WeEvent.Ajax.saveEvent(JSON.stringify(event), onSubmitEventSuccess, onSubmitEventError);
            } catch (errors) {
                var html = WeEvent.template("errorBlock", {errors: errors});
                $('#form-errors').html(html);
            }

            enableSubmitButton();
        },

        cancelButtonEvent: function() {
            hideAddEvent();
        }
    });
})();


var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = Backbone.View.extend({

        initialize: function(options) {
            if (_.isUndefined(options.eventId))
                throw "EventDashboardView requires an eventId in its construction";
            this.eventId = options.eventId;
            if (_.isUndefined(options.activeLabel))
                throw "A component of the event desktop requires an active label";
            this.activeLabel = options.activeLabel;
        },

        render: function() {
            var desktopContext = {
                eventId: this.eventId
            }
            var html = WeEvent.template("eventDesktop", desktopContext);
            this.$el.html(html);
            $(this.activeLabel).addClass('active');

            html = WeEvent.template("eventDashboard", {});
            $('#eventContentAttachmentPoint').html(html);

            return this;
        }

    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventSessionsView = Backbone.View.extend({
        initialize: function(options) {
            if (_.isUndefined(options.eventId))
                throw "EventDashboardView requires an eventId in its construction";
            this.eventId = options.eventId;
            if (_.isUndefined(options.activeLabel))
                throw "A component of the event desktop requires an active label";
            this.activeLabel = options.activeLabel;
        },

        render: function() {
            var desktopContext = {
                eventId: this.eventId
            }
            var html = WeEvent.template("eventDesktop", desktopContext);
            this.$el.html(html);
            $(this.activeLabel).addClass('active');

            html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);

            return this;
        }

    });

})();
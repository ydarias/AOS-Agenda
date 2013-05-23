var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {
    WeEvent.UI.MainTitleView = Backbone.View.extend({
        render: function(eventId) {
            var that = this;
            function onEventLoadSuccess(event) {
                var context = {
                    eventName: event.name
                };
                var html = WeEvent.template("title", context)
                that.$el.html(html);
            }

            if (eventId) {
                WeEvent.Ajax.getEvent(eventId, onEventLoadSuccess);
            } else {
                var html = WeEvent.template("title", {});
                this.$el.html(html);
            }

            return this;
        }
    });
})();


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

    WeEvent.UI.AbstractDesktopView = Backbone.View.extend({
        initialize: function(options) {
            if (_.isUndefined(options.eventId))
                throw "A component of the event desktop requires an eventId in its construction";
            this.eventId = options.eventId;

            if (_.isUndefined(options.activeLabel))
                throw "A component of the event desktop requires an activeLabel in its construction";
            this.activeLabel = options.activeLabel;
        },

        render: function(eventId) {
            var desktopContext = {
                eventId: this.eventId
            }
            var html = WeEvent.template("eventDesktop", desktopContext);
            this.$el.html(html);
            $(this.activeLabel).addClass('active');

            if (_.isUndefined(this.onRender))
                throw "The render method of event desktop component requires onRender function implementation";
            this.onRender(eventId);

            return this;
        }
    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            var html = WeEvent.template("eventDashboard", {});
            $('#eventContentAttachmentPoint').html(html);
        }
    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    function getSessionsHtml(session) {
        return WeEvent.template("session", {
            name: session.name,
            description: session.description,
            data: session.date
        });
    }

    function onLoadSessionsSuccess(data) {
        var $list = $('#sessions-list');
        $list.html('');
        _.forEach(data, function(session) {
            $list.append(getSessionsHtml(session));
        });
    }

    function disableAddSessionButton() {
        $('#add-session-button').addClass('disabled');
    }

    function enableAddSessionButton() {
        $('#add-session-button').removeClass('disabled');
    }

    function cleanAddSessionForm() {
        $('#form-errors').html();
        $('#add-session-form form')[0].reset();
    }

    function hideAddSession() {
        cleanAddSessionForm();
        $('#add-session-form').hide(500, enableAddSessionButton);
    }

    function disableSubmitButton() {
        var $element = $('#submit-session-button');
        if ($element)
            $element.addClass('disabled');
    }

    function enableSubmitButton() {
        var $element = $('#submit-session-button');
        if ($element)
            $element.removeClass('disabled');
    }

    function onSubmitSessionSuccess(data) {
        hideAddSession();

        $.noty({
            text: 'Nice!, your session was created.',
            layout: 'top',
            type: 'information'
        });

        var $list = $('#sessions-list');
        $list.append(getSessionHtml(data));

        enableSubmitButton();
    }

    function onSubmitSessionError() {
        $.noty({
            text: 'Oopss, we are embarrased something is wrong :-(',
            layout: 'top',
            type: 'error'
        });

        enableSubmitButton();
    }

    function getSessionHtml(session) {
        return WeEvent.template("session", {
            name: session.name,
            date: undefined,
            description: session.description,
            id: session.id
        });
    }

    WeEvent.UI.EventSessionsView = WeEvent.UI.AbstractDesktopView.extend({
        events: {
            "click #add-session-button": "displayAddSession",
            "click #submit-session-button": "submitSession",
            "click #cancel-button": "cancelButtonEvent"
        },

        onRender: function(eventId) {
            var html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);

            this.loadSessions(eventId);
            this.eventId = eventId;
        },

        loadSessions: function(eventId) {
            WeEvent.Ajax.listSessions(eventId, onLoadSessionsSuccess);
        },

        displayAddSession: function() {
            disableAddSessionButton();
            $('#add-session-form').show(500);
        },

        submitSession: function() {
            disableSubmitButton();

            try {
                var session = new WeEvent.Model.EventSession({
                    name: $('#sessionName').val(),
                    description: $('#sessionDescription').val()
                });
                WeEvent.Ajax.saveSession(this.eventId, JSON.stringify(session), onSubmitSessionSuccess, onSubmitSessionError);
            } catch (errors) {
                var html = WeEvent.template("errorBlock", {errors: errors});
                $('#form-errors').html(html);
            }

            enableSubmitButton();
        },

        cancelButtonEvent: function() {
            hideAddSession();
        }
    });

})();
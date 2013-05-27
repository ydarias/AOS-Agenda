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

    var eventsList;

    function showNoEventsMessage() {
        eventsList.$el.html('<div class="alert">There are no events, create a new one, is really easy :-)</div>');
    }

    function showEvents(data) {
        eventsList.$el.html('');
        _.forEach(data, function(event) {
            eventsList.$el.append(getEventHtml(event));
        });
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

    function showLoadingMessage() {
        var html = WeEvent.template("loading", {});
        eventsList.$el.html(html);
    }

    var EventsList = Backbone.View.extend({

        render: function() {
            showLoadingMessage();
            WeEvent.Ajax.listEvents(this.onLoadEventsSuccess, this.onLoadEventsError);
        },

        onLoadEventsSuccess: function(data) {
            if (data.length == 0)
                showNoEventsMessage();
            else
                showEvents(data);
        },


        onLoadEventsError: function() {
            $.noty({
                text: 'Oopss, we are embarrased something is wrong :-(',
                layout: 'top',
                type: 'error'
            });
        }

    });

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

    WeEvent.UI.ListEventsView = Backbone.View.extend({

        events: {
            "click #add-event-button": "displayAddEvent",
            "click #refresh-events-button": "render",
            "click #submit-event-button": "submitEvent",
            "click #add-event-form #cancel-button": "cancelButtonEvent"
        },

        render: function() {
            var html = WeEvent.template("listEvents", {});
            this.$el.html(html);

            $('#dateRange').daterangepicker({
                format: WeEvent.Configuration.dateFormat
            });

            eventsList = new EventsList({el: '#events-list'});
            eventsList.render();

            return this;
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

                WeEvent.Ajax.saveEvent(JSON.stringify(event), this.onSubmitEventSuccess, this.onSubmitEventError);
            } catch (errors) {
                var html = WeEvent.template("errorBlock", {errors: errors});
                $('#form-errors').html(html);
            }

            enableSubmitButton();
        },

        cancelButtonEvent: function() {
            hideAddEvent();
        },

        onSubmitEventSuccess: function(data) {
            hideAddEvent();
            $.noty({
                text: 'Nice!, your event was created.',
                layout: 'top',
                type: 'information'
            });

            eventsList.render();

            enableSubmitButton();
        },

        onSubmitEventError: function() {
            $.noty({
                text: 'Oopss, we are embarrased something is wrong :-(',
                layout: 'top',
                type: 'error'
            });

            enableSubmitButton();
        }

    });
})();


var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.AbstractDesktopView = Backbone.View.extend({
        initialize: function(options) {
            if (_.isUndefined(options.activeLabel))
                throw "A component of the event desktop requires an activeLabel in its construction";
            this.activeLabel = options.activeLabel;
        },

        render: function() {
            var desktopContext = {
                eventId: this.eventId
            }
            var html = WeEvent.template("eventDesktop", desktopContext);
            this.$el.html(html);
            $(this.activeLabel).addClass('active');

            if (_.isUndefined(this.onRender))
                throw "The render method of event desktop component requires onRender function implementation";
            this.onRender();

            return this;
        }
    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            function onSuccessStatsLoad(stats) {
                var html = WeEvent.template("eventDashboard", stats);
                $('#eventContentAttachmentPoint').html(html);
            }

            WeEvent.Ajax.getEventStats(this.eventId, onSuccessStatsLoad);


            return this;
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
            "click #add-session-form #cancel-button": "cancelButtonEvent"
        },

        onRender: function() {
            var html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);

            this.loadSessions();
        },

        loadSessions: function() {
            WeEvent.Ajax.listSessions(this.eventId, onLoadSessionsSuccess);
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
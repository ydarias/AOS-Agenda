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
            startDate: event.startDate,
            endDate: event.endDate,
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


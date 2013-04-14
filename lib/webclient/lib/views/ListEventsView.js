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
        $('#add-event-form form')[0].reset();
    }

    WeEvent.UI.ListEventsView = Backbone.View.extend({

        events: {
            "click #add-event-button": "displayAddEvent",
            "click #refresh-events-button": "render",
            "click #submit-event-button": "submitEvent",
            "click #cancel-button": "hideAddEvent"
        },

        render: function() {
            var html = WeEvent.template("listEvents", {});
            this.$el.html(html);

            $('#dateRange').daterangepicker({
                format: 'dd/MM/yyyy'
            });

            this.loadEvents();

            return this;
        },

        loadEvents: function() {
            function onSuccess(data) {
                var $list = $('#events-list');
                $list.html('');
                _.forEach(data, function(event) {
                    var html = WeEvent.template("event", {
                        name: event.name,
                        description: event.description
                    });
                    $list.append(html);
                });
            }

            function onError() {
                $.noty({
                    text: 'Oopss, we are embarrased something is wrong :-(',
                    layout: 'top',
                    type: 'error'
                });
            }

            WeEvent.Ajax.listEvents(onSuccess, onError);
        },

        displayAddEvent: function() {
            disableAddEventButton();
            $('#add-event-form').show(500);
        },

        submitEvent: function() {
            var self = this;

            var event = {
                name: $('#eventName').val(),
                description: $('#eventDescription').val()
            }

            var data = JSON.stringify(event);

            function onSuccess(data) {
                self.hideAddEvent();
                $.noty({
                    text: 'Nice!, your event was created.',
                    layout: 'top',
                    type: 'information'
                });

                var $list = $('#events-list');
                var html = WeEvent.template("event", {
                    name: data.name,
                    description: data.description
                });
                $list.append(html);
            }

            function onError() {
                $.noty({
                    text: 'Oopss, we are embarrased something is wrong :-(',
                    layout: 'top',
                    type: 'error'
                });
            }

            WeEvent.Ajax.saveEvent(data, onSuccess, onError);
        },

        hideAddEvent: function() {
            cleanAddEventForm();
            $('#add-event-form').hide(500, enableAddEventButton);
        }
    });
})();


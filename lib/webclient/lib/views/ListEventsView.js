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

            this.loadEvents();

            return this;
        },

        loadEvents: function() {
            $.ajax({
                url: WeEvent.Configuration.baseURL + '/events',
                type: 'GET',
                timeout: WeEvent.Configuration.timeout,
                success: function(data) {
                    var $list = $('#events-list');
                    $list.html('');
                    _.forEach(data, function(event) {
                        var html = WeEvent.template("event", {
                            name: event.name,
                            description: event.description
                        });
                        $list.append(html);
                    });
                },
                error: function() {
                    $.noty({
                        text: 'Oopss, we are embarrased something is wrong :-(',
                        layout: 'top',
                        type: 'error'
                    });
                }
            });
        },

        displayAddEvent: function() {
            disableAddEventButton();
            $('#add-event-form').show(500);
        },

        submitEvent: function() {
            var event = {
                name: $('#eventName').val(),
                description: $('#eventDescription').val()
            }

            var data = JSON.stringify(event);

            var self = this;
            $.ajax({
                url: WeEvent.Configuration.baseURL + '/events',
                type: 'POST',
                timeout: WeEvent.Configuration.timeout,
                contentType: 'application/json',
                data: data,
                success: function() {
                    self.hideAddEvent();
                    $.noty({
                        text: 'Nice!, your event was created.',
                        layout: 'top',
                        type: 'information'
                    });
                },
                error: function() {
                    $.noty({
                        text: 'Oopss, we are embarrased something is wrong :-(',
                        layout: 'top',
                        type: 'error'
                    });
                }
            });
        },

        hideAddEvent: function() {
            cleanAddEventForm();
            $('#add-event-form').hide(500, enableAddEventButton);
        }

    });
})();


var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {


    WeEvent.UI.EditEventFormView = Backbone.View.extend({

        initialize: function(options) {
            if (options) {
                this.eventId = options.eventId;
            }
        },

        render: function() {
            var that = this;

            function onEventLoadSuccess(event) {
                var html = WeEvent.template("editEventForm", event);
                that.$el.html(html);

                $('#dateRange').daterangepicker({
                    format: WeEvent.Configuration.dateFormat
                });
            }

            WeEvent.Ajax.getEvent(this.eventId, onEventLoadSuccess);

            return this;
        }

    });
})();


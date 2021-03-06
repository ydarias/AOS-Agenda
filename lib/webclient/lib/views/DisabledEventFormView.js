var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {
    WeEvent.UI.DisabledEventFormView = Backbone.View.extend({
        initialize: function(options) {
            if (options) {
                this.eventId = options.eventId;
            }
        },

        render: function() {
            var that = this;

            function onEventLoadSuccess(event) {
                var html = WeEvent.template("disabledEventForm", event);
                that.$el.html(html);
            }

            WeEvent.Ajax.getEvent(this.eventId, onEventLoadSuccess);

            return this;
        }
    });
})();


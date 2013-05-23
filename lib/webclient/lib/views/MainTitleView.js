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


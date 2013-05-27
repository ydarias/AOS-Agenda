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
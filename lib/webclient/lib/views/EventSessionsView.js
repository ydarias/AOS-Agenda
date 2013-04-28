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
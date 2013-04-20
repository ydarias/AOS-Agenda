var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = Backbone.View.extend({

        render: function() {
            var html = WeEvent.template("eventDesktop", {});
            this.$el.html(html);
            $('#eventDashboard').addClass('active');

            html = WeEvent.template("eventDashboard", {});
            $('#eventContentAttachmentPoint').html(html);

            return this;
        }

    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = Backbone.View.extend({

        render: function() {
            var html = WeEvent.template("eventDesktop", {});
            this.$el.html(html);
            $('#eventDashboard').addClass('active');

            return this;
        }

    });

})();
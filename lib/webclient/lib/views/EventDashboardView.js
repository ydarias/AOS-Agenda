var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            var that = this;

            function onSuccessStatsLoad(stats) {
                var html = WeEvent.template("eventDashboard", stats);
                $('#eventContentAttachmentPoint').html(html);

                var eventForm = new WeEvent.UI.DisabledEventFormView({
                    el: '#eventMainData',
                    eventId: that.eventId
                });
                eventForm.render();
            }

            WeEvent.Ajax.getEventStats(this.eventId, onSuccessStatsLoad);

            return this;
        }
    });

})();
var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            function onSuccessStatsLoad(stats) {
                var html = WeEvent.template("eventDashboard", stats);
                $('#eventContentAttachmentPoint').html(html);
            }

            WeEvent.Ajax.getEventStats(this.eventId, onSuccessStatsLoad);


            return this;
        }
    });

})();
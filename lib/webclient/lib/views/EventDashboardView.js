var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventDashboardView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            var html = WeEvent.template("eventDashboard", {});
            $('#eventContentAttachmentPoint').html(html);
        }
    });

})();
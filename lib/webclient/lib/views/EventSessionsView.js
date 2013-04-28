var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    WeEvent.UI.EventSessionsView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function() {
            var html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);
        }
    });

})();
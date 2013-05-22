var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    function getSessionsHtml(session) {
        return WeEvent.template("session", {
            name: session.name,
            description: session.description,
            data: session.date
        });
    }

    function onLoadSessionsSuccess(data) {
        var $list = $('#sessions-list');
        $list.html('');
        _.forEach(data, function(session) {
            $list.append(getSessionsHtml(session));
        });
    }

    WeEvent.UI.EventSessionsView = WeEvent.UI.AbstractDesktopView.extend({
        onRender: function(eventId) {
            var html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);

            this.loadSessions(eventId);
        },

        loadSessions: function(eventId) {
            WeEvent.Ajax.listSessions(eventId, onLoadSessionsSuccess);
        }
    });

})();
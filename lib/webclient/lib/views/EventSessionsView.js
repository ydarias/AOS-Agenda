var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {

    function getSessionHtml(session) {
        return WeEvent.template("session", {
            name: session.name,
            date: WeEvent.Moment.formatDateTime(session.date),
            description: session.description,
            id: session.id
        });
    }

    function onLoadSessionsSuccess(data) {
        var $list = $('#sessions-list');
        $list.html('');
        _.forEach(data, function(session) {
            $list.append(getSessionHtml(session));
        });
    }

    function disableAddSessionButton() {
        $('#add-session-button').addClass('disabled');
    }

    function enableAddSessionButton() {
        $('#add-session-button').removeClass('disabled');
    }

    function cleanAddSessionForm() {
        $('#form-errors').html();
        $('#add-session-form form')[0].reset();
    }

    function hideAddSession() {
        cleanAddSessionForm();
        $('#add-session-form').hide(500, enableAddSessionButton);
    }

    function disableSubmitButton() {
        var $element = $('#submit-session-button');
        if ($element)
            $element.addClass('disabled');
    }

    function enableSubmitButton() {
        var $element = $('#submit-session-button');
        if ($element)
            $element.removeClass('disabled');
    }

    function onSubmitSessionSuccess(data) {
        hideAddSession();

        $.noty({
            text: 'Nice!, your session was created.',
            layout: 'top',
            type: 'information'
        });

        var $list = $('#sessions-list');
        $list.append(getSessionHtml(data));

        enableSubmitButton();
    }

    function onSubmitSessionError() {
        $.noty({
            text: 'Oopss, we are embarrased something is wrong :-(',
            layout: 'top',
            type: 'error'
        });

        enableSubmitButton();
    }

    WeEvent.UI.EventSessionsView = WeEvent.UI.AbstractDesktopView.extend({
        events: {
            "click #add-session-button": "displayAddSession",
            "click #submit-session-button": "submitSession",
            "click #add-session-form #cancel-button": "cancelButtonEvent"
        },

        onRender: function() {
            var html = WeEvent.template("eventSessions", {});
            $('#eventContentAttachmentPoint').html(html);

            this.loadSessions();
        },

        loadSessions: function() {
            WeEvent.Ajax.listSessions(this.eventId, onLoadSessionsSuccess);
        },

        displayAddSession: function() {
            disableAddSessionButton();
            $('#add-session-form').show(500);
        },

        submitSession: function() {
            disableSubmitButton();

            try {
                var session = new WeEvent.Model.EventSession({
                    name: $('#sessionName').val(),
                    description: $('#sessionDescription').val(),
                    date: '25/05/2013 12:50'
                });
                WeEvent.Ajax.saveSession(this.eventId, JSON.stringify(session), onSubmitSessionSuccess, onSubmitSessionError);
            } catch (errors) {
                var html = WeEvent.template("errorBlock", {errors: errors});
                $('#form-errors').html(html);
            }

            enableSubmitButton();
        },

        cancelButtonEvent: function() {
            hideAddSession();
        }
    });

})();
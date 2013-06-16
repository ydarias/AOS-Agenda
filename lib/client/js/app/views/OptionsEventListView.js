App.OptionsEventListView = Backbone.View.extend({

    initialize : function (options) {
        this.eventId = options.eventId;
    },

    render : function () {
        var that = this;

        function successCallback(event) {
            var context = {
                event : event,
                // TODO estos datos se pueden meter en la plantilla no tienen sentido en el View.js
                links : [
                    {
                        titleOptionEvent : 'Schedule',
                        iconOptionEvent: 'icon-agenda.png',
                        href: '#events/' + that.eventId + "/schedule"
                    }
                ]
            };
            that.$el.html(App.template("optionEventList", context));
        }

        Ajax.loadEvent(this.eventId, successCallback);
    }

});
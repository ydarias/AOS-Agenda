App.OptionsEventListView = Backbone.View.extend({

    initialize : function (options) {
        this.event = options.event;
    },

    render : function () {
        var context = {
            event : this.event,
            links : [
                {
                    titleOptionEvent : 'My Schedule',
                    iconOptionEvent: 'icon-my-agenda.png',
                    href: '#events/' + this.event.id + "/mySchedule"
                },
                {
                    titleOptionEvent : 'Schedule',
                    iconOptionEvent: 'icon-agenda.png',
                    href: '#events/' + this.event.id + "/schedule"
                },
                {
                    titleOptionEvent : 'Location',
                    iconOptionEvent: 'icon-maps.png',
                    href: '#events/' + this.event.id + "/location"
                },
                {
                    titleOptionEvent : 'Twitter',
                    iconOptionEvent: 'icon-twitter.png',
                    href: '#events/' + this.event.id + "/twitter"
                }
            ]
        };
        this.$el.html(App.template("optionEventList", context));
    }

});
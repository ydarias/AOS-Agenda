App.OptionsEventListView = Backbone.View.extend({

    render : function () {
        var context = {
            events : [
                {
                    titleOptionEvent : 'My Schedule',
                    iconOptionEvent: 'myschedule.png',
                    href: 'myschedule'
                },
                {
                    titleOptionEvent : 'Schedule',
                    iconOptionEvent: 'schedule.png',
                    href: 'schedule'
                },
                {
                    titleOptionEvent : 'Location',
                    iconOptionEvent: 'map.png',
                    href: 'location'
                },
                {
                    titleOptionEvent : 'Twitter',
                    iconOptionEvent: 'twitter.png',
                    href: 'twitter'
                }
            ]
        };
        this.$el.html(App.template("optionEventList", context));
    }

});
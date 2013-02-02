App.EventListView = Backbone.View.extend({

    render : function () {
        var context = {
            events : [
                {
                    titleEvent : 'SW Tenerife 2013',
                    classEvent : 'activeEvent',
                    iconEvent: 'swt.png'
                },
                {
                    titleEvent : 'Google IO 2013',
                    classEvent : 'activeEvent',
                    iconEvent: 'gio.png'
                },
                {
                    titleEvent : 'Agile Spain 2013',
                    classEvent : 'activeEvent',
                    iconEvent: 'as.png'
                },
                {
                    titleEvent : 'Barcelona DC 2012',
                    classEvent : 'inactiveEvent',
                    iconEvent: 'bdc.png'
                },
                {
                    titleEvent : 'RubyConf 2012',
                    classEvent : 'inactiveEvent',
                    iconEvent: 'rc.png'
                }
            ]
        };
        this.$el.html(App.template("eventList", context));
    }

});
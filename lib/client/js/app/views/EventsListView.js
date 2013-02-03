App.EventListView = Backbone.View.extend({

    render : function () {
        var context = {
            events : App.data.events
        };
        this.$el.html(App.template("eventList", context));
    }

});
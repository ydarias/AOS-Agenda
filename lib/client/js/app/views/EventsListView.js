App.EventListView = Backbone.View.extend({

    render : function () {
        var that = this;

        function successCallback(data) {
            var context = {
                events : data
            };
            that.$el.html(App.template("eventList", context));
        }

        Ajax.loadEvents(successCallback);
    }
});

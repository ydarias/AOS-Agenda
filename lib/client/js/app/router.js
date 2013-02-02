App.Router = Backbone.Router.extend({

    initialize : function (options) {
        this.el = options.el;
    },

    routes : {
        "events" : "events",
        "events/:id" : "eventsById",
        "admin/event" : "adminEvent",
        "*path" : "index"
    },

    index : function () {
        var basicView = new App.BasicView({el : this.el});
        basicView.render();
    },

    events : function () {

    },

    eventsById : function (id) {

    },

    adminEvent : function () {
        var basicView = new App.AdminEventView({el : this.el});
        basicView.render();
    }

});

App.Router = Backbone.Router.extend({

    initialize : function (options) {
        this.el = options.el;
    },

    routes : {
        "events" : "events",
        "events/:id/schedule" : "schedule",
        "events/:id/mySchedule" : "mySchedule",
        "events/:id/location" : "location",
        "events/:id/twitter" : "twitter",
        "events/:id" : "eventsById",
        "admin/event" : "adminEvent",
        "*path" : "index"
    },

    index : function () {
        this.navigate("events");
    },

    events : function () {
        var view = new App.EventListView({el : this.el});
        view.render();
    },

    _findEvent : function (id) {
        var event = _.find(App.data.events, function (event) {
            return id === event.id;
        });
        return event;
    },

    eventsById : function (id) {
        var event = this._findEvent(id);
        var view = new App.OptionsEventListView({el : this.el, event : event});
        view.render();
    },

    schedule : function (id) {
        var event = this._findEvent(id);
        var view = new App.SlotsView({el : this.el, slots : event.slots});
        view.render();
    },

    location : function (id) {
        var event = this._findEvent(id);
        var view = new App.LocationView({el : this.el, event : event});
        view.render();
    },

    mySchedule : function (id) {
        var event = this._findEvent(id);
        var slots = _.filter(event.slots, function (slot) {
            return slot.favourite;
        });
        var view = new App.SlotsView({el : this.el, slots : slots});
        view.render();
    },

    twitter : function () {

    },

    adminEvent : function () {
        var basicView = new App.AdminEventView({el : this.el});
        basicView.render();
    }

});

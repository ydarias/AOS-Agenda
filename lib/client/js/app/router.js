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
        "events/:id/slots/:idSlot" : "slotDetails",
        "events/:id/slots/:idSlot/indoorMap" : "indoorMap",
        "admin/event" : "adminEvent",
        "*path" : "index"
    },

    index : function () {
        this.navigate("events", {trigger : true});
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
        var view = new App.OptionsEventListView({el : this.el, eventId : id});
        view.render();
    },

    schedule : function (id) {
        var view = new App.SlotsView({el : this.el, eventId : id});
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
        var view = new App.SlotsView({el : this.el, event : event, slots : slots});
        view.render();
    },

    twitter : function (id) {
        var event = this._findEvent(id);
        var view = new App.TwitterView({el : this.el, hashtag : event.hashtag});
        view.render();
    },

    slotDetails : function (id, idSlot) {
        var event = this._findEvent(id);
        var slot = _.find(event.slots, function (slot) {
            return slot.details.id === idSlot;
        });
        var view = new App.DetailsSlotView({el : this.el, event : event, slot : slot});
        view.render();
    },

    indoorMap : function (id, idSlot) {
        var event = this._findEvent(id);
        var slot = _.find(event.slots, function (slot) {
            return slot.details.id === idSlot;
        });
        var view = new App.IndoorMapView({el : this.el, slot : slot});
        view.render();
    },

    adminEvent : function () {
        var basicView = new App.AdminEventView({el : this.el});
        basicView.render();
    }

});

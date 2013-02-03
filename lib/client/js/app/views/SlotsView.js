App.SlotView = Backbone.View.extend({

    events : {
        "click" : "goToDetail"
    },

    goToDetail : function () {
        var slot = this.options.slot;
        var event = this.options.event;
        App.router.navigate("/events/" + event.id + "/slots/" + slot.details.id, {trigger : true});
        return false;
    },

    render : function () {
        var slot = this.options.slot;
        var context = {
            slot : slot,
            favClass : slot.favourite? "fav" : ""
        };
        this.$el.html(App.template("slot", context));
        return this;
    }
});

App.SlotsView = Backbone.View.extend({

    render : function () {
        this.$el.html(App.template("slots", {}));
        var slots = this.options.slots;
        var event = this.options.event;
        _.each(slots, function (slot) {
            var view = new App.SlotView({slot : slot, event: event});
            this.$('.media-list').append(view.render().el);
        });
        return this;
    }

});
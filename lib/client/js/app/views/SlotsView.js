App.SlotView = Backbone.View.extend({

    events : {
        "click" : "toggleFav"
    },

    toggleFav : function () {
        this.options.slot.favourite = !this.options.slot.favourite;
        this.render();
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
        this.$el.html(App.template("slots"));
        var slots = this.options.slots;
        _.each(slots, function (slot) {
            var view = new App.SlotView({slot : slot});
            this.$('.media-list').append(view.render().el);
        });
        return this;
    }

});
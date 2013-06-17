App.SlotView = Backbone.View.extend({

    events : {
        "click" : "goToDetail",
        "click .my-icon": "changeFav"
    },

    changeFav : function () {
         this.options.slot.favourite = !this.options.slot.favourite ;
         this.render();
         return false;
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
            iconClass : slot.favourite? "img/icons/checkSelected.png" : "img/icons/emptyCheck.png"
        };
        this.$el.html(App.template("slot", context));
        return this;
    }
});

App.SlotsView = Backbone.View.extend({

    initialize: function(options) {
        this.eventId = options.eventId;
    },

    render : function () {
        var that = this;

        function successCallback(event) {
            that.$el.html(App.template("slots", {}));
            var slots = event.sessions;
            var event = event;
            var sortedSlots = _.sortBy(slots, function(slot) {
                var day = moment(slot.date);
                return day.toDate().getTime();
            });
            _.each(sortedSlots, function (slot) {
                var view = new App.SlotView({slot : slot, event: event});
                this.$('.media-list').append(view.render().el);
            });
        }

        Ajax.loadEvent(this.eventId, successCallback);

        return this;
    }

});
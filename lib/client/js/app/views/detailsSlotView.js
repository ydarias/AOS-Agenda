App.DetailsSlotView = Backbone.View.extend({

    events : {
        "click .starAdd" : 'changeStar',
        "click #indoorMap" : 'indoorMap'
    },

    changeStar :  function () {
        this.options.slot.details.rating=this.options.slot.details.rating+1;
        this.render();
        return false;
    },

    indoorMap :  function () {
        var slot = this.options.slot;
        var event = this.options.event;
        App.router.navigate("/events/" + event.id + "/slots/" + slot.details.id + "/indoorMap", {trigger : true});
        return false;
    },

    render : function () {
        var slot = this.options.slot;
        var rating = this.options.slot.details.rating;
        var starImgs = [];
        for(var i = 0; i < 5; i++) {
            if(i < rating) {
                starImgs.push("icon-star");
            } else {
                starImgs.push("icon-star-empty");
            }
        }
        var context = {
            slot : slot,
            starImgs : starImgs
        };
        this.$el.html(App.template("detailsSlot", context));
    }

});
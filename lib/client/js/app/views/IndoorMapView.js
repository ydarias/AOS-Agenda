App.IndoorMapView = Backbone.View.extend({

    render : function () {
        var slot = this.options.slot;
        var context = {
            slot : slot
        };
        this.$el.html(App.template("indoorMap", context));
    }

});
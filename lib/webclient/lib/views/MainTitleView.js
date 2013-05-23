var WeEvent = WeEvent || {};

WeEvent.UI = WeEvent.UI || {};

(function() {
    WeEvent.UI.MainTitleView = Backbone.View.extend({
        render: function() {
            var html = WeEvent.template("title", {});
            this.$el.html(html);

            return this;
        }
    });
})();


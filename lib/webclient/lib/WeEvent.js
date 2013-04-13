var WeEvent = WeEvent || {};

WeEvent.template = function (name, data) {
    return JST[name](data);
}

WeEvent.Configuration = WeEvent.Configuration || {};
(function() {
    WeEvent.Configuration.baseURL = 'http://localhost:8080/api';
    WeEvent.Configuration.timeout = 30000;
})();

WeEvent.Router = Backbone.Router.extend({

    routes: {
        "*path": "listEvents"
    },

    listEvents: function() {
        var listEventsView = new WeEvent.UI.ListEventsView({
            el: '#contentAttachmentPoint'
        });
        listEventsView.render();
    }

});
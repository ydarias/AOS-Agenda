App.LocationView = Backbone.View.extend({

    render : function () {
        this.$el.html(App.template("location"));
        this.showMap();
    },

    showMap : function () {
        var map;

        var location = this.options.event.location;
        var center = new google.maps.LatLng(location.lat, location.lng);
        var mapOptions = {
            zoom : 8,
            center : center,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(this.$(".map").get(0), mapOptions);

        var marker = new google.maps.Marker({
            position: center,
            title:"Location"
        });
        marker.setMap(map);
    }

});
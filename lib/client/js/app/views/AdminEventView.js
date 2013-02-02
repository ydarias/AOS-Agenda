App.AdminEventView = Backbone.View.extend({

    render : function () {
        var context = {
            slots : [
                {
                    title : "Slot1",
                    tags : "type1",
                    time : "Monday 9:00"
                },
                {
                    title : "Slot2",
                    tags : "type2",
                    time : "Monday 10:00"
                }
            ]
        };
        this.$el.html(App.template("adminEvent", context));

        this.showMap();
    },

    showMap : function () {
        var map;

        var center = new google.maps.LatLng(28.168875,-16.556396);
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

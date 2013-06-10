App.OptionsEventListView = Backbone.View.extend({

    initialize : function (options) {
        this.eventId = options.eventId;
    },

    render : function () {
        var that = this;

        function successCallback(event) {
            var context = {
                event : event,
                links : [
                    {
                        titleOptionEvent : 'Schedule',
                        iconOptionEvent: 'icon-agenda.png',
                        href: '#events/' + that.eventId + "/schedule"
                    },
                    {
                        titleOptionEvent : 'Location',
                        iconOptionEvent: 'icon-maps.png',
                        href: '#events/' + that.eventId + "/location"
                    },
                    {
                        titleOptionEvent : 'Twitter',
                        iconOptionEvent: 'icon-twitter.png',
                        href: '#events/' + that.eventId + "/twitter"
                    }
                ]
            };
            that.$el.html(App.template("optionEventList", context));
        }

        $.ajax({
            url: WeEvent.Configuration.baseURL + '/events/' + this.eventId,
            type: 'GET',
            timeout: WeEvent.Configuration.timeout,
            contentType: 'application/json',
            success: function(data) {
                if (successCallback) {
                    var objectifiedData = data;
                    if (!_.isObject(data))
                        objectifiedData = JSON.parse(data);
                    successCallback(objectifiedData);
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                if (errorCallback)
                    errorCallback(xhr, textStatus, errorThrown);
            }
        });



    }

});
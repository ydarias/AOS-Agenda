App.BasicView = Backbone.View.extend({

    render : function () {
        var context = {
            events : [
                {
                    title : 'Title',
                    speakers : 'Speakers!!'
                },
                {
                    title : 'Title2',
                    speakers : 'Speakers2!!'
                }
            ]
        };
        this.$el.html(App.template("template1", context));
    }

});
App.SlotsView = Backbone.View.extend({

    render : function () {
        var context = {
            slots : [
                {
                    title : 'Registro, acreditaciones y networking',
                    author : 'Guido',
                    location : {
                        color: 'color1',
                        description: 'Sala general'
                    },
                    date: {
                        startTime: '17:00',
                        finishTime: '16:00',
                        date:'01-02-2013'
                    }
                },
                {
                    title : 'Conferencia inaugural',
                    author : 'Carlos Velasquez',
                    location : {
                        color: 'color1',
                        description: 'Sala general'
                    },
                    date: {
                        startTime: '18:00',
                        finishTime: '19:00',
                        date:'01-02-2013'
                    }
                },
                {
                    title : 'Desayunamos',
                    author : '',
                    location : {
                        color: 'color2',
                        description: 'Sala comidas'
                    },
                    date: {
                        startTime: '09:00',
                        finishTime: '10:00',
                        date:'02-02-2013'
                    }
                },
                {
                    title : 'Conferencia',
                    author : 'Yurena y Tana',
                    location : {
                        color: 'color3',
                        description: 'Sala 1'
                    },
                    date: {
                        startTime: '10:00',
                        finishTime: '11:00',
                        date:'02-02-2013'
                    }
                }
            ]
        };
        this.$el.html(App.template("slots", context));
    }

});
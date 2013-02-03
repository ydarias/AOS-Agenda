App.data = App.data || {};
App.data.events = [
    {
        id : "swt",
        titleEvent : 'SW Tenerife 2013',
        classEvent : 'activeEvent',
        iconEvent : 'swt.png',
        location : {lat : 28.168875, lng : -16.556396},
        slots : [
            {
                title : 'Registro, acreditaciones y networking',
                author : 'Guido',
                location : {
                    color : 'color1',
                    description : 'Sala general'
                },
                date : {
                    startTime : '17:00',
                    finishTime : '16:00',
                    date : '01-02-2013'
                }
            },
            {
                title : 'Conferencia inaugural',
                author : 'Carlos Velasquez',
                location : {
                    color : 'color1',
                    description : 'Sala general'
                },
                date : {
                    startTime : '18:00',
                    finishTime : '19:00',
                    date : '01-02-2013'
                }
            },
            {
                title : 'Desayunamos',
                author : '',
                location : {
                    color : 'color2',
                    description : 'Sala comidas'
                },
                date : {
                    startTime : '09:00',
                    finishTime : '10:00',
                    date : '02-02-2013'
                },
                favourite : true
            },
            {
                title : 'Conferencia',
                author : 'Yurena y Tana',
                location : {
                    color : 'color3',
                    description : 'Sala 1'
                },
                date : {
                    startTime : '10:00',
                    finishTime : '11:00',
                    date : '02-02-2013'
                },
                favourite : true
            }
        ]
    },
    {
        id : "googleio",
        titleEvent : 'Google IO 2013',
        classEvent : 'activeEvent',
        iconEvent : 'gio.png',
        location : {lat : 35.906849, lng : -119.289551}
    },
    {
        id : "agile",
        titleEvent : 'Agile Spain 2013',
        classEvent : 'activeEvent',
        iconEvent : 'as.png',
        location : {lat : 40.413496, lng : -3.669434}
    },
    {
        id : "bcn",
        titleEvent : 'Barcelona DC 2012',
        classEvent : 'inactiveEvent',
        iconEvent : 'bdc.png',
        location : {lat : 41.623655, lng : 1.713867}
    },
    {
        id : "ruby",
        titleEvent : 'RubyConf 2012',
        classEvent : 'inactiveEvent',
        iconEvent : 'rc.png',
        location : {lat : 51.536086, lng : 0}
    }
];

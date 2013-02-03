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
                title : 'Register, accreditations and networking',
                author : 'Guido',
                location : {
                    color : 'color1',
                    description : 'Principal Room',
                    map: 'img/mapsRooms/room1.png'
                },
                date : {
                    startTime : '17:00',
                    finishTime : '16:00',
                    date : '01-02-2013'
                },
                details : {
                    id : "register",
                    description : 'Registration of participants to give them their badges and they begin to make networking and getting acquainted.',
                    rating : 1
                }
            },
            {
                title : 'Opening Conference',
                author : 'Carlos Velasquez',
                location : {
                    color : 'color1',
                    description : 'Principal Room',
                    map: 'img/mapsRooms/room1.png'
                },
                date : {
                    startTime : '18:00',
                    finishTime : '19:00',
                    date : '01-02-2013'
                },
                details : {
                    id : "opening",
                    description : 'Inaugural lecture by one of the organizers of the event.',
                    rating : 4
                }
            },
            {
                title : 'Breakfast',
                author : '',
                location : {
                    color : 'color2',
                    description : 'Dining Room',
                    map: 'img/mapsRooms/room1.png'
                },
                date : {
                    startTime : '09:00',
                    finishTime : '10:00',
                    date : '02-02-2013'
                },
                favourite : true,
                details : {
                    id : "breakfast",
                    description : 'Breakfast in the room where all meals will be made of the event.',
                    rating : 3
                }
            },
            {
                title : 'Conference',
                author : 'Yurena and Tana',
                location : {
                    color : 'color3',
                    description : 'Room 1',
                    map: 'img/mapsRooms/room1.png'
                },
                date : {
                    startTime : '10:00',
                    finishTime : '11:00',
                    date : '02-02-2013'
                },
                favourite : true,
                details : {
                    id : "conference",
                    description : 'Conference two experienced entrepreneurs in the informal sector creating startup.',
                    rating : 5
                }
            },
            {
                title : 'Explain your idea',
                author : '',
                location : {
                    color : 'color1',
                    description : 'Principal Room'
                },
                date : {
                    startTime : '18:30',
                    finishTime : '19:30',
                    date : '01-02-2013'
                },
                favourite : true,
                details : {
                    id : "conference",
                    description : 'Explain your idea.',
                    rating : 5
                }
            },
            {
                title : 'Vote for Now',
                author : '',
                location : {
                    color : 'color1',
                    description : 'Principal Room'
                },
                date : {
                    startTime : '19:30',
                    finishTime : '20:30',
                    date : '02-02-2013'
                },
                favourite : true,
                details : {
                    id : "conference",
                    description : 'Conference two experienced entrepreneurs in the informal sector creating startup.',
                    rating : 5
                }
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

var WeEvent = WeEvent || {};

WeEvent.template = function (name, data) {
    return JST[name](data);
}

WeEvent.Configuration = WeEvent.Configuration || {};
(function() {
    // @ifdef DEVELOPMENT
    WeEvent.Configuration.baseURL = 'http://localhost:8080/api';
    // @endif
    // @ifdef PRODUCTION
    WeEvent.Configuration.baseURL = 'http://ec2-54-228-142-207.eu-west-1.compute.amazonaws.com:8080/api';
    // @endif
    WeEvent.Configuration.timeout = 30000;
    WeEvent.Configuration.dateFormat = 'dd/MM/yyyy';
    WeEvent.Configuration.dateTimeFormat = 'dd/MM/yyyy hh:mm';
    WeEvent.Configuration.parseDateTimeFormat = 'DD/MM/YYYY HH:mm';
    WeEvent.Configuration.parseDatePickerFormat = 'DD/MM/YYYY';   // TODO delete this reference and use momentDateFormat
    WeEvent.Configuration.momentDateFormat = 'DD/MM/YYYY';
    WeEvent.Configuration.momentDateTimeFormat = 'DD/MM/YYYY HH:mm';
})();

WeEvent.Moment = WeEvent.Moment || {};

// TODO revisar el uso de estos métodos porque son candidatos a ser eliminados en favor de los helpets de Handlebars

(function() {
    function parseRange(dateRange) {
        var ranges = dateRange.split(" - ");
        return {
            start: moment.utc(ranges[0], WeEvent.Configuration.parseDatePickerFormat).toDate(),
            end: moment.utc(ranges[1], WeEvent.Configuration.parseDatePickerFormat).toDate()
        };
    }

    function parseDateTime(dateTime) {
        return moment(dateTime, WeEvent.Configuration.parseDateTimeFormat).toDate();
    }

    function formatDateTime(dateTime) {
        if (_.isUndefined(dateTime))
            return undefined;

        return moment(dateTime).format(WeEvent.Configuration.parseDateTimeFormat);
    }

    WeEvent.Moment.parseRange = parseRange;
    WeEvent.Moment.parseDateTime = parseDateTime;
    WeEvent.Moment.formatDateTime = formatDateTime;
})();

(function() {
    Handlebars.registerHelper('date', function(date) {
        var parsedDate = moment(date);
        if (parsedDate)
            return parsedDate.format(WeEvent.Configuration.momentDateFormat);
        else
            return '';
    });

    Handlebars.registerHelper('dateTime', function(date) {
        var parsedDate = moment(date);
        if (parsedDate)
            return parsedDate.format(WeEvent.Configuration.momentDateTimeFormat);
        else
            return '';
    });
})();



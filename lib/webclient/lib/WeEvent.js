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
    WeEvent.Configuration.datePickerFormat = 'DD/MM/YYYY';
})();

WeEvent.Moment = WeEvent.Moment || {};
(function() {
    function parseRange(dateRange) {
        var ranges = dateRange.split(" - ");
        return {
            start: moment.utc(ranges[0], WeEvent.Configuration.datePickerFormat).toDate(),
            end: moment.utc(ranges[1], WeEvent.Configuration.datePickerFormat).toDate()
        };
    }

    WeEvent.Moment.parseRange = parseRange;
})();




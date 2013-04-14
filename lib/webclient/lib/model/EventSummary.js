var WeEvent = WeEvent || {};

WeEvent.Model = WeEvent.Model || {};

WeEvent.Model.EventSummary = Backbone.Model.extend({
    initialize: function() {
        var errors = [];

        if (!this.get('name'))
            errors.push({description: "Event name can't be empty string, you should give a name to your event."});
        if (!this.get('dateRange'))
            errors.push({description: "The event requires a range of dates when it will be celebrated."});
        if (!this.get('description'))
            errors.push({description: "Event description can't be empty string, you should give a description to your event."});

        if (errors.length > 0)
            throw errors;

        var range = WeEvent.Moment.parseRange(this.get('dateRange'));
        this.startDate = range.start;
        this.endDate = range.end;

        this.unset('dateRange');
    }

});
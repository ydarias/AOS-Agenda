App.TweetView = Backbone.View.extend({

    events : {

    },

    render : function () {
        var tweet = this.options.tweet;
        var context = {
            tweet : tweet
        };
        this.$el.html(App.template("tweet", context));
        return this;
    }
});

App.TwitterView = Backbone.View.extend({

    render : function () {
        var hashtag = this.options.hashtag;
        this.$el.html(App.template("twitter",{hashtag:hashtag}));

        var tweets =  this._findTweetsByHashtag(hashtag);

        _.each(tweets, function (tweet) {
            var view = new App.TweetView({tweet : tweet});
            this.$('.media-list').append(view.render().el);
        });
        return this;
    },

    _findTweetsByHashtag : function (hashtag) {

        var tweets = App.data.tweets;

        var tweets = _.where(App.data.tweets, {hashtag:hashtag});

        return tweets;
    }

});
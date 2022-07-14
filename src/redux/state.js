let store = {
    _state: {
        mainTweetData: {
            tweetData: [
                {
                    id: '@johndue',
                    name: 'Devon Lane',
                    text: 'Tom is in a big hurry.',
                    tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
                }
            ],
            newTweetText: ''
        },
        
        newsData: [
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
            {
                title: 'Trending in Kazakhstan',
                subtitle: 'Kazakhstan',
                tags: '43 Tweets'
            },
        ]
    },

    getState() {
        return this._state;
    },

    _callSubscriber()  {
        console.log('fffgrg');
    },

    addPost() {
        let newPost = {
            id: '@ggrrht',
            name: 'Kirill',
            text: this._state.mainTweetData.newTweetText,
        };
        this._state.mainTweetData.tweetData.push(newPost);
        this._state.mainTweetData.newTweetText = '';
        this._callSubscriber(this._state);
    },

    updateNewTweetText(newText) {
        this._state.mainTweetData.newTweetText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store
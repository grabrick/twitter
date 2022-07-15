// const action type
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TWEET_TEXT = 'UPDATE-NEW-TWEET-TEXT'

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
    _callSubscriber()  {
        console.log('fffgrg');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // dispatcher 
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: '@ggrrht',
                name: 'Kirill',
                text: this._state.mainTweetData.newTweetText,
            };
            this._state.mainTweetData.tweetData.push(newPost);
            this._state.mainTweetData.newTweetText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_TWEET_TEXT) {
            this._state.mainTweetData.newTweetText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateTweetActionCreator = (text) => ({type: UPDATE_NEW_TWEET_TEXT, newText: text})

export default store
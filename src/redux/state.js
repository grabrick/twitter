import messageReducer from "./messageReducer"
import tweetReducer from "./tweetReducer"


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
        ],

        messageData: {
            messageCatalog: [
                {
                    name: 'Elena',
                    userId: '@fffhrjkc',
                    lastMessage: 'Hi'
                }
            ],
            messageDialog: [
                {
                    message: 'how are u?',

                }
            ],
            newMessageBody: ''
        }
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
        this._state.mainTweetData = tweetReducer(this._state.mainTweetData, action)
        this._state.messageData = messageReducer(this._state.messageData, action)


        this._callSubscriber(this._state);
    }
}





export default store
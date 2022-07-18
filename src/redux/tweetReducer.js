const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TWEET_TEXT = 'UPDATE-NEW-TWEET-TEXT'

const tweetReducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: '@ggrrht',
                name: 'Kirill',
                text: state.newTweetText,
            };
            state.tweetData.push(newPost);
            state.newTweetText = '';
            return state;
        // eslint-disable-next-line no-fallthrough
        case UPDATE_NEW_TWEET_TEXT:
            state.newTweetText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateTweetCreator = (text) => ({type: UPDATE_NEW_TWEET_TEXT, newText: text})

export default tweetReducer;
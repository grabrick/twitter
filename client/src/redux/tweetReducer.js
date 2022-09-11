const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TWEET_TEXT = 'UPDATE-NEW-TWEET-TEXT'

const initialState = {
    tweetData: [
        {   
            Avatar: 'https://sun9-32.userapi.com/impg/lUScM_MAg076fCAQbxVP9BCEMHC8UBHHbcpkBA/hn7xdLYNgdE.jpg?size=612x873&quality=95&sign=5daf20cf12dbb91ae2715e8fe982fdfe&type=album',
            id: '@johndue',
            name: 'Devon Lane',
            text: 'Tom is in a big hurry.',
            tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
        }
    ],
    newTweetText: ''
};

const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: '@ggrrht',
                name: 'Kirill',
                text: state.newTweetText,
            };
            // state.tweetData.push(newPost);
            // state.newTweetText = '';
            // return state;

            return {
                ...state,
                tweetData: [...state.tweetData, newPost],
                newTweetText: ''
            }
        case UPDATE_NEW_TWEET_TEXT:
            // state.newTweetText = action.newText;
            return {...state, newTweetText: action.newText};
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updateTweetCreator = (text) => ({type: UPDATE_NEW_TWEET_TEXT, newText: text})

export default tweetReducer;
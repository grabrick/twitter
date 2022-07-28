import initialState from "./initialState";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TWEET_TEXT = 'UPDATE-NEW-TWEET-TEXT'


// const initialStatev = {
//     tweetData: [
//         {
//             id: '@johndue',
//             name: 'Devon Lane',
//             text: 'Tom is in a big hurry.',
//             tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
//         }
//     ],
//     newTweetText: ''
// };

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
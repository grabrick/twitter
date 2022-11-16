import { ITweet } from "../types/types";
import { PayloadAction } from "@reduxjs/toolkit";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_TWEET_TEXT = "UPDATE-NEW-TWEET-TEXT";
const DELETE_TWEET = "DELETE-TWEET";

const initialState: ITweet = {
  tweetData: [
    {
      avatar: 'https://sun9-32.userapi.com/impg/lUScM_MAg076fCAQbxVP9BCEMHC8UBHHbcpkBA/hn7xdLYNgdE.jpg?size=612x873&quality=95&sign=5daf20cf12dbb91ae2715e8fe982fdfe&type=album',
      image: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg',
      id: '@johndue',
      name: 'Devon Lane',
      text: 'Tom is in a big hurry.'
    }
  ],
  newTweetText: ''
};

const tweetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      // let newPost = {
      //   id: "@ggrrht",
      //   name: "Kirill",
      //   text: state.newTweetText,
      // };

      // state.tweetData.push(newPost);
      // state.newTweetText = '';
      // return state;

      return {
        ...state,
        // tweetData: [...state.tweetData, newPost],
        newTweetText: "",
      };
    case UPDATE_NEW_TWEET_TEXT:
      // state.newTweetText = action.newText;
      return { ...state, newTweetText: action.newText };

    case DELETE_TWEET:
      console.log(state.tweetData);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const deleteTweetCreator = (payload: any) => ({
  type: DELETE_TWEET,
  action: payload,
});
export const updateTweetCreator = (text: PayloadAction<string>) => ({
  type: UPDATE_NEW_TWEET_TEXT,
  newText: text,
});

export default tweetReducer;

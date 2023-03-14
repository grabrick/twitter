import { ITweet, TweetItem } from "../types/types";
import { PayloadAction } from "@reduxjs/toolkit";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_TWEET_TEXT = "UPDATE-NEW-TWEET-TEXT";
const DELETE_TWEET = "DELETE-TWEET";
const GET_TWEETS = "GET-TWEETS"

const initialState = {
  tweetData: [],
  newTweetText: "",
};

const tweetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TWEETS:
    return {
      ...state, tweetData: action.tweetData
    }
    case ADD_POST:
      let newPost = {
        id: "@ggrrht",
        name: "Kirill",
        text: state.newTweetText,
        avatar: '',
        image: "",
      };

      // state.tweetData.push(newPost);
      // state.newTweetText = '';
      // return state;

      return {
        ...state,
        tweetData: [newPost, ...state.tweetData],
        newTweetText: "",
      };
    case UPDATE_NEW_TWEET_TEXT:
      // state.newTweetText = action.newText;
      return { ...state, newTweetText: action.newText };

    case DELETE_TWEET:
      return {
        ...state, tweetData: action.tweetData
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
export const getTweets = (tweetData: TweetItem) => ({
  type: GET_TWEETS,
  tweetData: tweetData
})

export default tweetReducer;

import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../../redux/tweetReducer'
import messageReducer from '../../redux/messageReducer'
import newsReducer from '../../redux/newsReducer'
import profileUsersReducer from '../../redux/profileUsersReducer'

export const store = configureStore({
    reducer: {
        tweet: tweetReducer,
        message: messageReducer, 
        news: newsReducer,
        profileUsers: profileUsersReducer
    }
})
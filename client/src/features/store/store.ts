import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../../redux/tweetReducer'
import messageReducer from '../../redux/messageReducer'
import newsReducer from '../../redux/newsReducer'
import profileUsersReducer from '../../redux/profileUsersReducer'
import friendsReducer from '../../redux/friendsReducer'

export const store = configureStore({
    reducer: {
        tweet: tweetReducer,
        message: messageReducer, 
        news: newsReducer,
        profileUsers: profileUsersReducer,
        friends: friendsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
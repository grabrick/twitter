import { createSlice } from '@reduxjs/toolkit'
import initialState from '../../redux/initialState'
import messageReducer from "../../redux/messageReducer"
import tweetReducer from "../../redux/tweetReducer"
import newsReducer from "../../redux/newsReducer"



export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        Message: messageReducer,
        Tweet: tweetReducer,
        News: newsReducer
    },
});

export default mainSlice.reducer
import React, { FC, useEffect } from "react";
import './Tweet.css'
import TweetComponent from "../TweetComponent";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hook";
import { ITweet, TweetItem } from "../../../types/types";
import axios from "axios";
import { getTweets } from "../../../redux/tweetReducer";

const Tweet: FC<ITweet> = () => {
  const dispatch = useAppDispatch();
  const tweet = useAppSelector(state => state.tweet.tweetData)
  const getTweet = (tweet: TweetItem) => {
    dispatch(getTweets(tweet))
  }
  
  useEffect(() => {
      axios.get('http://localhost:3000/api/posts')
      .then((items) => {
        getTweet(items.data.candidate)
      }).catch((e) => {
        console.log(e)
      })
  }, [])

  const tweetElement = tweet.map((t: { avatar: string; name: string; _id: string; text: string; image: string; }) =>
    <TweetComponent key={t._id} avatar={t.avatar} name={t.name} id={t._id} lastTime='20s' text={t.text} tweetImage={t.image} />)

  return (
    <>
      { tweetElement }
    </>
  );
}

export default Tweet
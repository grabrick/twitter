import React, { FC } from "react";
import './Tweet.css'
import TweetComponent from "../TweetComponent";
import { useAppSelector } from "../../../hooks/redux.hook";
import { ITweet } from "../../../types/types";

// нужно зафиксть твиты, ломается логика добавления постов

const Tweet: FC<ITweet> = () => {
  const tweet = useAppSelector(state => state.tweet.tweetData)
  const tweetElement = tweet.map(tweet =>
    <TweetComponent Avatar={tweet.avatar} name={tweet.name} id={tweet.id} lastTime='20s' text={tweet.text} tweetImage={tweet.image} />)

  return (
    <>
      {tweetElement}
    </>
  );
}

export default Tweet 
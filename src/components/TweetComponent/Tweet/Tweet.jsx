import React from "react";
import './Tweet.css'
import TweetAvatar from '../../../images/Tweet__avatar.svg';
import TweetComponent from "../TweetComponent";
import { useSelector } from 'react-redux'

function Tweet() {
  const tweet= useSelector(state => state.main.state.mainTweetData.tweetData)
  const tweetElement = tweet.map(tweet => <TweetComponent Avatar={TweetAvatar} name={tweet.name} id={tweet.id} lastTime='20s' text={tweet.text} tweetImage={tweet.tweetImage} />)

  return (
    <>
      {tweetElement}
    </>
  );
}

export default Tweet 
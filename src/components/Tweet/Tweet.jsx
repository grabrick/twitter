import React from "react";
import '../Tweet/Tweet.css'
import TweetAvatar from '../../images/Tweet__avatar.svg';
import TweetImage from '../../images/Tweet__image.svg'
import TweetComponent from "../TweetComponent/TweetComponent";


function Tweet() {
  return (
    <>
      <TweetComponent Avatar={TweetAvatar} name='Devon Lane' id='@johndue' lastTime='20s' text='Tom is in a big hurry.' tweetImage={TweetImage} /> 
    </>
  );
}

export default Tweet 
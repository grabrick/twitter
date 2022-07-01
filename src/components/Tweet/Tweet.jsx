import React from "react";
import '../Tweet/Tweet.css'
import TweetAvatar from '../../images/Tweet__avatar.svg';
// import TweetImage from '../../images/Tweet__image.svg'
import TweetComponent from "../TweetComponent/TweetComponent";


function Tweet() {

  const tweetData = [
    {
      id: ' @johndue',
      name: 'Devon Lane',
      text: 'Tom is in a big hurry.',
      tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
    }
  ]

  const tweetElement = tweetData
    .map(tweet => <TweetComponent Avatar={TweetAvatar} name={tweet.name} id={tweet.id} lastTime='20s' text={tweet.text} tweetImage={tweet.tweetImage} />)

  return (
    <>
      {tweetElement}
    </>
  );
}

export default Tweet 
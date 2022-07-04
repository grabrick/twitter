import React from "react";
import './Tweet.css'
import TweetAvatar from '../../../images/Tweet__avatar.svg';
// import TweetImage from '../../images/Tweet__image.svg'
import TweetComponent from "../TweetComponent";

function Tweet(props) {

  // const tweetData = [
  //   {
  //     id: ' @johndue',
  //     name: 'Devon Lane',
  //     text: 'Tom is in a big hurry.',
  //     tweetImage: 'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
  //   }
  // ]
  // debugger
  const tweetElement = props.tweetData
    .map(props => <TweetComponent Avatar={TweetAvatar} name={props.name} id={props.id} lastTime='20s' text={props.text} tweetImage={props.tweetImage} />)

  return (
    <>
      {tweetElement}
    </>
  );
}

export default Tweet 
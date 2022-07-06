import React from "react";
import './Tweet.css'
import TweetAvatar from '../../../images/Tweet__avatar.svg';
import TweetComponent from "../TweetComponent";

function Tweet(props) {
  const tweetElement = props.tweetData
    .map(props => <TweetComponent Avatar={TweetAvatar} name={props.name} id={props.id} lastTime='20s' text={props.text} tweetImage={props.tweetImage} />)

  return (
    <>
      {tweetElement}
    </>
  );
}

export default Tweet 
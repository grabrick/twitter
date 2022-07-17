import React from 'react';
import './Feed.css'
import profile from '../../images/profile.svg'
import Tweet from '../TweetComponent/Tweet/Tweet';
import { NavLink } from "react-router-dom";
import { addPostCreator, updateTweetCreator } from '../../redux/state';

function Feed(props) {
  let submitElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let onPostChange = () => {
    let text = submitElement.current.value;
    let action = updateTweetCreator(text);
    props.dispatch(action);
  }

  return (
    <section className="feed">
      <div className="feed__container">
        <div className="feed__header">
          <h3 className="feed__name">Home</h3>
          <div className="feed__stars" />
        </div>
        <div className="feed__tweet">
          <div className="feed__tweet_wrapper">
            <div className="feed__tweet_wrap">
              <div className="feed__tweet_avatar-wrapper">
                <NavLink to='/Profile'><img className="feed__tweet_avatar-profile avatar" src={profile} alt="avatar"/></NavLink>
              </div>
              <textarea className="feed__tweet_title textarea" placeholder="What’s happening?" onChange={onPostChange} ref={submitElement} value={props.newTweetText} />
            </div>
            <div className="feed__tweet_wrapper-button">
              <div className="feed__tweet-button">
                <div className="feed__tweet_button-img"></div>
                <div className="feed__tweet_button-gif"></div>
                <div className="feed__tweet_button-emoji"></div>
              </div>
              <button className="feed__tweet_button-tweet feed__tweet_text" onClick={addPost}>Tweet</button>
            </div>
          </div>
        </div>
        <div className="feed__bar"></div>
      </div>

      <Tweet tweetData={props.tweetData} />
    </section>
  );
}

export default Feed
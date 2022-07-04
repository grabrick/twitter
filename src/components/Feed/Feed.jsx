import React from 'react';
import './Feed.css'
import profile from '../../images/profile.svg'
import Tweet from '../TweetComponent/Tweet/Tweet';
import { NavLink } from "react-router-dom";

function Feed(props) {
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
                <NavLink to='/Profile'><img className="feed__tweet_avatar-profile" src={profile} alt="avatar"/></NavLink>
              </div>
              <textarea className="feed__tweet_title textarea" placeholder="What’s happening?" required />
            </div>
            <div className="feed__tweet_wrapper-button">
              <div className="feed__tweet-button">
                <div className="feed__tweet_button-img"></div>
                <div className="feed__tweet_button-gif"></div>
                <div className="feed__tweet_button-emoji"></div>
              </div>
              <button className="feed__tweet_button-tweet feed__tweet_text">Tweet</button>
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
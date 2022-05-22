import React from 'react';
import './Feed.css'
import profile from '../../images/profile.svg'



function Feed() {
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
                <img className="feed__tweet_avatar-profile" src={profile} alt="avatar"/>
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
    </section>
  );
}

export default Feed
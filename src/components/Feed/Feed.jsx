import React from 'react';
import './Feed.css';
import profile from '../../images/profile.svg';
import Tweet from '../TweetComponent/Tweet/Tweet';
// import btnImg from '../../images/btn__img.svg';
// import btnGif from '../../images/btn__gif.svg'
// import btnEmoji from '../../images/btn__emoji.svg'
import { NavLink } from "react-router-dom";
import { addPostCreator, updateTweetCreator } from '../../redux/tweetReducer';
import { useDispatch, useSelector } from 'react-redux';

function Feed() {
  const dispatch = useDispatch();
  const newTweetData = useSelector(state => state.tweet.newTweetText);

  let addPost = () => {
    dispatch(addPostCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateTweetCreator(text);
    dispatch(action);
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
              <textarea className="feed__tweet_title textarea" placeholder="What’s happening?" onChange={onPostChange} value={newTweetData} />
            </div>
            <div className="feed__tweet_wrapper-button">
              <form className="feed__tweet-button">
                <div className="button-img">
                  <input type="button" />
                  <input className="feed__tweet_button-img" type="file"/>
                </div>
                {/* <input className="feed__tweet_button-gif" />
                <input className="feed__tweet_button-emoji" /> */}
              </form>
              <button className="feed__tweet_button-tweet feed__tweet_text" onClick={addPost} >Tweet</button>
            </div>
          </div>
        </div>
        <div className="feed__bar"></div>
      </div>

      <Tweet />
    </section>
  );
}

export default Feed
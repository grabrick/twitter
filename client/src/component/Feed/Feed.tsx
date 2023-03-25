import React, { FC } from 'react';
import './Feed.css';
import Tweet from '../TweetComponent/Tweet/Tweet';
// import btnImg from '../../images/btn__img.svg';
// import btnGif from '../../images/btn__gif.svg'
// import btnEmoji from '../../images/btn__emoji.svg'
import { addPostCreator, updateTweetCreator } from '../../redux/tweetReducer';
import FeedRender from './FeedRender/FeedRender';
// import * as axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';

const Feed: FC = () => {
  const dispatch = useAppDispatch();
  const newTweetText = useAppSelector(state => state.tweet.newTweetText);
  // const newTweetImage = useSelector(state => state.tweet.newTweetText)


  let addPost = () => {
    // dispatch(addPostCreator());
    console.log("fdf")
    
  };

  let onPostChange = (e: any) => {
    let text = e.target.value;
    let action = updateTweetCreator(text);
    dispatch(action);
  }

  // let onPostImageChange = (e) => {
  //   let image = e.target.value;
  //   let action = updateTweetCreator(image)
  //   dispatch(action)
  // } ломает проект при добавление буквы value={newTweetImage} onChange={onPostImageChange}

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

              <FeedRender />

              <textarea className="feed__tweet_title textarea" placeholder="What’s happening?" onChange={onPostChange} value={newTweetText} />
            </div>
            <form className="feed__tweet_wrapper-button">
              <div className="feed__tweet-button">
                <div className="button-img">
                  <input type="button" />
                  <input className="feed__tweet_button-img" type="file" />
                </div>
                {/* <input className="feed__tweet_button-gif" />
                <input className="feed__tweet_button-emoji" /> */}
              </div>
              <button className="feed__tweet_button-tweet feed__tweet_text" onClick={addPost} >Tweet</button>
            </form>
          </div>
        </div>
        <div className="feed__bar"></div>
      </div>

      <Tweet tweetData={[]} newTweetText={''} />
    </section>
  );
}

export default Feed
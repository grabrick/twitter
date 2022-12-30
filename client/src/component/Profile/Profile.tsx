import React, { FC } from "react";
import '../Profile/Profile.css';
import Intro from '../../images/intro.svg';
// import Avatar from '../../images/Avatar.svg';
import Arrow from '../../images/arrow.svg';
// import Tweet from "../TweetComponent/Tweet/Tweet";
import ProfileRender from './ProfileRender/ProfileRender'
import ProfilePopup from "./ProfilePopup/ProfilePopup";
import { close } from "../../types/types";

// import { useDispatch } from 'react-redux'
// import * as axios from "axios";


const Profile: FC<close> = () => {
  // const dispatch = useDispatch()
  const [isPopup, setIsPopup] = React.useState<boolean>(false);

  const [show, setShow] = React.useState<string>("Tweets")

  const handleTweetsClick = () => {
    setShow("Tweets");
  }

  const handleRepliesClick = () => {
    setShow("Tweets & replies");
}
  
  const handleMediaClick = () => {
    setShow("Media");
  }

  const handleLikesClick = () => {
    setShow("Likes");
  }

  const activeColor = "profile__main-btn_tweet-active";

  const inactiveColor = "profile__main-btn_tweet";

  // const renderFriends = (user) => {
  //   dispatch((user));
  // }

  return (
    <section className='profile'>
        <div className="profile__header">
          <img src={Arrow} alt="arrow" className="profile__arrow" />
          
          <div className="profile__info">
            <p className="profile__name">Name</p>
            <span className="profile__span">1 Tweets</span>
          </div>
        </div>

        <div className="profile__main">
          <div className="profile__main_profile">
            <img src={Intro} alt="intro" className="profile__main_intro" />
            
            <ProfileRender users={[]} />

            <div className="profile__main-btn_tweets">
              <button className={show === "Tweets" ? activeColor : inactiveColor} onClick={handleTweetsClick}>
                <p className="profile__main-btn_text">Tweets</p>
              </button>

              <button className={show === "Tweets & replies" ? activeColor : inactiveColor} onClick={handleRepliesClick}>
                <p className="profile__main-btn_text">Tweets & replies</p>
              </button>

              <button className={show === "Media" ? activeColor : inactiveColor} onClick={handleMediaClick}>
                <p className="profile__main-btn_text">Media</p>
              </button>

              <button className={show === "Likes" ? activeColor : inactiveColor} onClick={handleLikesClick}>
                <p className="profile__main-btn_text">Likes</p>
              </button>
            </div>
            

            {/* {show === "Tweets" && (<Tweet/> )} */}
          </div>
        </div>
        {isPopup && <ProfilePopup close={() => setIsPopup(false)} />}  
    </section>
  );
}

export default Profile
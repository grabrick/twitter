import React from "react";
import '../Profile/Profile.css';
import Intro from '../../images/intro.svg';
import Avatar from '../../images/Avatar.svg';
import Arrow from '../../images/arrow.svg';

function Profile() {
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
            <div className="profile__main_info">
              <div className="profile__main_header">
                <img src={Avatar} alt="logo" className="profile__main_logo" />
                <button className="profile__main_btn">Edit profile</button>
              </div>

              <div className="profile__main_subtitle">
                <div className="profile__main_element1">
                  <p className="profile__main_name">Davide Biscuso</p>
                  <span className="profile__main_login">@biscuttu</span>
                </div>

                <div className="profile__main_element2">
                  <p className="profile__main_job">Product Designer</p>
                  <span className="profile__main_location">London</span>
                  <span className="profile__main_data">Joined September 2011</span>
                </div>

                <div className="profile__main_element3">
                  <p className="profile__main_following">569<span className="profile__main-following_span">following</span></p>
                  <p className="profile__main_Followers">72<span className="profile__main-Followers_span">Followers</span></p>
                </div>
              </div>
            </div>

            <div className="profile__main-btn_tweets">
              <div className="profile__main-btn_tweet">
                <p className="profile__main-btn_text">Tweets</p>
              </div>

              <div className="profile__main-btn_tweet">
                <p className="profile__main-btn_text">Tweets & replies</p>
              </div>

              <div className="profile__main-btn_tweet">
                <p className="profile__main-btn_text">Media</p>
              </div>

              <div className="profile__main-btn_tweet">
                <p className="profile__main-btn_text">Likes</p>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}

export default Profile
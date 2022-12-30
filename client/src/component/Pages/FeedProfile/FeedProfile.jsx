import React from 'react';
import Nav from '../../Nav/Nav'
import NewsItem from '../../NewsItem/NewsItem';
import Profile from '../../Profile/Profile';

function FeedProfile() {
    return (
      <>
        <>
          <Nav classHome={`${"nav__inactive"}`} classMessage={`${"nav__inactive"}`} classProfile={`${"nav__active"}`} classFriends={`${"nav__inactive"}`} />
        </>
        <>
          <Profile />
          <NewsItem />
        </>
      </>
    );
}

export default FeedProfile
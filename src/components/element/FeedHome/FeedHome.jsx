import React from 'react';
import Nav from '../../Nav/Nav'
import News from '../../News/News'
import Feed from '../../Feed/Feed'
// import Message from '../../Message/Message'
// import NewsItem from '../../NewsItem/NewsItem';


function FeedHome() {
  return (
    <>
      <Nav />
      <Feed />
      <News />
    </>
  );
}

export default FeedHome
import React from 'react';
import Nav from '../../Nav/Nav'
import News from '../../News/News'
import Feed from '../../Feed/Feed'
// import Message from '../../Message/Message'


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
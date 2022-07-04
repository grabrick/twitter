import React from 'react';
import Nav from '../../Nav/Nav'
import News from '../../NewsItem/News/News'
import Feed from '../../Feed/Feed'
// import Message from '../../Message/Message'
// import NewsItem from '../../NewsItem/NewsItem';


function FeedHome(props) {
  return (
    <>
      <Nav />
      <Feed tweetData={props.tweetData} />
      <News />
    </>
  );
}

export default FeedHome
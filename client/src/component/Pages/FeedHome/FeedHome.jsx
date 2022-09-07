import React from 'react';
import Nav from '../../Nav/Nav'
// import News from '../../NewsItem/News/News'
import Feed from '../../Feed/Feed'
import NewsItem from '../../NewsItem/NewsItem';


function FeedHome() {
  return (
    <>
      <>
        <Nav />
      </>
      <>
        <Feed />
        <NewsItem />
      </>
    </>
  );
}

export default FeedHome
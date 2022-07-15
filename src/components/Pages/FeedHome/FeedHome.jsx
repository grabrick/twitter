import React from 'react';
import Nav from '../../Nav/Nav'
// import News from '../../NewsItem/News/News'
import Feed from '../../Feed/Feed'
import NewsItem from '../../NewsItem/NewsItem';


function FeedHome(props) {
  return (
    <>
      <Nav />
      <Feed tweetData={props.tweetData} dispatch={props.dispatch} newTweetText={props.newText.newTweetText}/>
      <NewsItem newsData={props.newsData} />
    </>
  );
}

export default FeedHome
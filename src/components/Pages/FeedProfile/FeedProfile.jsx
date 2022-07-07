import React from 'react';
import Nav from '../../Nav/Nav'
import NewsItem from '../../NewsItem/NewsItem';
import Profile from '../../Profile/Profile';

function FeedProfile(props) {
    return(
        <>
        <Nav />
        <Profile tweetData={props.tweetData} />
        <NewsItem newsData={props.newsData} />
        </>
    )
}

export default FeedProfile
import React from 'react';
import Nav from '../../Nav/Nav'
import News from '../../NewsItem/News/News'
import Profile from '../../Profile/Profile';

function FeedProfile(props) {
    return(
        <>
        <Nav />
        <Profile tweetData={props.tweetData} />
        <News />
        </>
    )
}

export default FeedProfile
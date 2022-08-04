import React from "react";
import NewsItem from '../../NewsItem/NewsItem';
import Nav from '../../Nav/Nav'
import Friends from "../../Friends/Friends";


function FeedFriends() {
    return (
        <>
            <Nav />
            <Friends />
            <NewsItem />
        </>
    );
}

export default FeedFriends;
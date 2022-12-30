import React from "react";
import NewsItem from '../../NewsItem/NewsItem';
import Nav from '../../Nav/Nav'
import Friends from "../../Friends/Friends";


function FeedFriends() {
    return (
      <>
        <>
          <Nav classHome={`${"nav__inactive"}`} classMessage={`${"nav__inactive"}`} classProfile={`${"nav__inactive"}`} classFriends={`${"nav__active"}`} />
        </>
        <>
          <Friends />
          <NewsItem newsData={[]} />
        </>
      </>
    );
}

export default FeedFriends;
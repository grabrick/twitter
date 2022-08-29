import React from "react";
import {useSelector} from "react-redux"
import FeedComponent from "../FeedComponent/FeedComponent";

function FeedRender() {
    const feedProfile = useSelector(state => state.profileUsers.users)

    const feedProfileElement = feedProfile.map((feedProfile) => (
      <FeedComponent 
        photo={feedProfile.photo}
      />
    ));

    return (
        <>
            {feedProfileElement}
        </>
    );
}

export default FeedRender;
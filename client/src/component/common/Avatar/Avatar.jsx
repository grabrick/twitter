import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";


function Avatar() {
    debugger
    const avatar = useSelector(state => state.tweet.tweetData)
        .map((photo) => {
            return (
                <NavLink to="/Profile">
                <img
                  src={photo.Avatar}
                  alt=" "
                  className="tweet__header_img avatar"
                />
              </NavLink>
            )
        })

    return (
      <>
        {avatar}
      </>
    );
}

export default Avatar;
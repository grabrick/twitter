import React from "react";
import { NavLink } from "react-router-dom";

function FeedComponent(state) {
  return (
    <>
      <div className="feed__tweet_avatar-wrapper">
        <NavLink to="/Profile">
          <img
            className="feed__tweet_avatar-profile avatar"
            src={state.photo}
            alt="avatar"
          />
        </NavLink>
      </div>
    </>
  );
}

export default FeedComponent;
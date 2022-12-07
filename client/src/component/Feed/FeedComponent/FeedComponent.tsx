import React from "react";
import { NavLink } from "react-router-dom";

const FeedComponent = (state: any) => {
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
import React from "react";
import { useSelector } from "react-redux";


const Avatar = () => {
    const avatar = useSelector(state => state.tweet.tweetData)
    const image = avatar.map((photo) => {
        return photo.avatar
    })

    return (
      <>
        <img src={image} alt="" className="tweet__header_img avatar" />
      </>
    );
}

export default Avatar;
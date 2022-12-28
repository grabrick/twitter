import React from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/redux.hook";


const Avatar = () => {
    const avatar = useAppSelector(state => state.tweet.tweetData)
    const image = avatar.map((photo: {avatar: string}) =>  photo.avatar)
    
    return (
      <>
        <img src={image} alt="" className="tweet__header_img avatar" />
      </>
    );
}

export default Avatar;
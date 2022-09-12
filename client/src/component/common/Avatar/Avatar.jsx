import React from "react";
import { useSelector } from "react-redux";


function Avatar() {
    const avatar = useSelector(state => state.tweet.tweetData)
    const image = avatar.map((phato) => {
        return phato.Avatar
    })


        // .map((photo) => {
        //     return (
        //         <img
        //           src={photo.Avatar}
        //           alt=" "
        //           className="tweet__header_img avatar"
        //         />
        //     )
        // })

    return (
      <>
        {/* {avatar} */}

        
        <img src={image} alt=" " className="tweet__header_img avatar" />
      </>
    );
}

export default Avatar;
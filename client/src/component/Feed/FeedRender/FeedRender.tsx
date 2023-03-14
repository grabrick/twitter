import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux.hook";
import FeedComponent from "../FeedComponent/FeedComponent";


const FeedRender: FC = () => {
    const feedProfile = useAppSelector(state => state.profileUsers.users)
    const feedProfileElement = feedProfile.map((feedProfile: { photo: string }) => (
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
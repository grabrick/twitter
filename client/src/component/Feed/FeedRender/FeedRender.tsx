import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux.hook";
import FeedComponent from "../FeedComponent/FeedComponent";


const FeedRender: FC = () => {
    const feedProfile = useAppSelector(state => state.profileUsers.users)
    const feedProfileElement = feedProfile.map((feedProfile: { id: number, photo: string }) => (
      <FeedComponent
        key={feedProfile.id}
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
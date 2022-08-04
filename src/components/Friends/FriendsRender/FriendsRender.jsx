import React from "react";
import { useSelector } from 'react-redux'
import FriendsComponent from "../FriendsComponent/FriendsComponent";


function FriendsRender() {
    const friendList = useSelector(state => state.friends.friendsList);
    const friendsElement = friendList
        .map(friendList => <FriendsComponent name={friendList.name} userId={friendList.userId} photos={friendList.photos} />)
    return (
        <>
            { friendsElement }
        </>
    );
}

export default FriendsRender;
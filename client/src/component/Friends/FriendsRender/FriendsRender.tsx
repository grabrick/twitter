import React, { FC } from "react";
// import { useSelector } from 'react-redux'
import FriendsComponent from "../FriendsComponent/FriendsComponent";
import { IFriends } from "../../../types/types";
import { useAppSelector } from "../../../hooks/redux.hook";

const FriendsRender: FC<IFriends> = () => {
    const friendList = useAppSelector(state => state.friends.friendsList);
    const friendsElement = friendList
        .map((friendList: { name: string, userId: string, photos?: string, followed: boolean, }) =>
            <FriendsComponent name={friendList.name} userId={friendList.userId} photos={friendList.photos} followed={friendList.followed} />)
    return (
        <>
            {friendsElement}
        </>
    );
}

export default FriendsRender;
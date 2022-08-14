import React from "react";
import undefinedAvatar from '../../../images/users__avatar.svg'
import {followActionCreator, unFollowActionCreator} from '../../../redux/friendsReducer'
import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from "react";
// import * as axios from 'axios'

function FriendsComponent(state) {
    const userId = useSelector((state) => state.friends.friendsList);
    const dispatch = useDispatch()
    // const activeBtn = 'active';
    // const unactiveBtn = 'unactive'

    const onChangeFollow = (usersId) => {
        dispatch(followActionCreator(usersId))
    }

    // const onChangeUnFollow = (usersId) => {
    //     dispatch(unFollowActionCreator(usersId))
    // }



    const follow = 'Follow';
    const unfollow = 'Unfollow';

    return (
        <div className="friends__item">
            <div className="friends__item_photos-wrapper">
                <img src={state.photos.small != null ? state.photos.small : undefinedAvatar} alt="" className='friends__item_photos' />
                <div className="friends__item_status"></div>
            </div>
            <div className="friends__item_wrapper-wrapper">
                <div className="friends__item_wrapper">
                    <h4 className="friends__item__name">{state.name}<span className='friends__item_name-id'>{state.usersId}</span></h4>
                </div>
                <button className="friends__item_btn" onClick={onChangeFollow} >{state.followed === false ? follow : unfollow}</button>
            </div>
        </div>
    );
}

export default FriendsComponent;
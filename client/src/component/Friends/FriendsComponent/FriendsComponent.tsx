import React from "react";
import undefinedAvatar from '../../../images/users__avatar.svg'
// import {followActionCreator, unFollowActionCreator} from '../../../redux/friendsReducer'
// import { useDispatch } from 'react-redux'
// import { useEffect } from "react";
import axios from 'axios'

function FriendsComponent(state: any) {
//   const friendList = useSelector((state) => state.userPage.friendList);

  // const userId = useSelector((state) => state.friends.friendsList);

  // const dispatch = useDispatch();
  // const onChangeFollow = (usersId) => {
  //   dispatch(followActionCreator(usersId));
  // };

  const follow = "Follow";
  const unfollow = "Unfollow";

  const getUsers = () => {
    axios.get('/api/auth/login')
      .then((items) => {
        debugger
        console.log('data has been received', items.data)
      })
      .catch(() => {
        console.log('error data')
      })
  }

  return (
    <>
      <div className="friends__item">
        <div className="friends__item_photos-wrapper">
          <img
            src={
              state.photos.small != null ? state.photos.small : undefinedAvatar
            }
            alt=""
            className="friends__item_photos"
          />
          <div className="friends__item_status"></div>
        </div>
        <div className="friends__item_wrapper-wrapper">
          <div className="friends__item_wrapper">
            <h4 className="friends__item__name">
              {state.name}
              <span className="friends__item_name-id">{state.userId}</span>
            </h4>
          </div>
          <button className="friends__item_btn" onClick={getUsers}>
            {state.followed === false ? follow : unfollow}
          </button>
        </div>
      </div>
    </>
  );
}

export default FriendsComponent;
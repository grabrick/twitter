import React from "react";
import './Friends.css'
import FriendsRender from "./FriendsRender/FriendsRender";
import {useDispatch} from 'react-redux'
import renderFriendsActionCreator from '../../redux/friendsReducer'


function Friends() {
    const dispatch = useDispatch();
    const requestURL = 'https://jsonplaceholder.typicode.com/users';

    const renderFriends = () => {
        dispatch(renderFriendsActionCreator())
    }

        fetch(requestURL).then(response => {
            return response.json()
        }).then(item => {
            renderFriends(item)
        })

    // На завтра, нужно доделать запрос с юзирами
    return (
        <section className="friends__main_window">
            <FriendsRender />

            <div className="friends__main_window-btn">
                <button className="show__more" onClick={renderFriends}>show more</button>
            </div>
        </section>
    );
}

export default Friends;
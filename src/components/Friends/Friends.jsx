import React from "react";
import './Friends.css'
import FriendsRender from "./FriendsRender/FriendsRender";
import { useDispatch, useSelector } from 'react-redux'
import { renderFriendsActionCreator } from '../../redux/friendsReducer'
import { useEffect } from "react";
import * as axios from 'axios'


function Friends() {
    // const requestURL = 'https://social-network.samuraijs.com/api/1.0/users';
    const dispatch = useDispatch();
    const users = useSelector((state) => state.friends.friendsList);
    const renderFriends = (user) => {
        dispatch(renderFriendsActionCreator(user));
    }
    useEffect(() => {
            // fetch(requestURL).then(response => {
            //     return response.json();
            // }).then(item => {
            //     renderFriends(item.items);
            // })
        if(users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    renderFriends(res.data.items);
                })

        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="friends__main_window">
            <FriendsRender />
{/* 
            <div className="friends__main_window-btn">
                <button className="show__more">show more</button>
            </div> */}
        </section>
    );
}

export default Friends;
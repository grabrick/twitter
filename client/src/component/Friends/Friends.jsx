import React from "react";
import './Friends.css'
import './Friends.scss'
import FriendsRender from "./FriendsRender/FriendsRender";
import { useDispatch, useSelector } from 'react-redux'
import { renderFriendsActionCreator, changePageActionCreator } from '../../redux/friendsReducer'
import { useEffect } from "react";
import * as axios from 'axios'


function Friends() {
    const activePage = "active__color_page"


    const dispatch = useDispatch();
    const users = useSelector((state) => state.friends.friendsList);
    const totalUsersCount = useSelector((state) => state.friends.totalUsersCount);
    const pagesSize = useSelector(state => state.friends.pagesSize);
    const currentPage = useSelector((state) => state.friends.currentPage);

    const renderFriends = (user) => {
        dispatch(renderFriendsActionCreator(user));
    }

    const changePage = (numberPage) => {
      dispatch(changePageActionCreator(numberPage))
    }

    useEffect(() => {
        if(users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesSize}`)
                .then(res => {
                    renderFriends(res.data.items);
                })
                
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const pageCount = Math.ceil(totalUsersCount / pagesSize)

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    const onChangePage = (pageNumber) => {
        changePage(pageNumber)
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesSize}`)
              .then(res => {
                  renderFriends(res.data.items);
              })
    }

    return (
      <section className="friends__main_window">
        <div className="friends__main_wrapper">
          <div className="friends__main_friends">
            <FriendsRender />
          </div>

          <div className="friends__main_pages">
            {pages.map((p) => {
              return <span className={currentPage === p && activePage} id="number__page" onClick={() => {onChangePage(p)}}>{p}</span>      
            })}
          </div>
        </div>
      </section>
    );
}

export default Friends;
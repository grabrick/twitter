import React from "react";
import './Friends.css'
import FriendsRender from "./FriendsRender/FriendsRender";

function Friends() {
    return (
        <section className="friends__main_window">
            <FriendsRender />
        </section>
    );
}

export default Friends;
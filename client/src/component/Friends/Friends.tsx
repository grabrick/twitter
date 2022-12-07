import React, { FC } from "react";
import './Friends.css'
import './Friends.scss'
import FriendsRender from "./FriendsRender/FriendsRender";
import Preloader from "../common/Preloader/preloader";
import Pagination from "../common/Pagination/Pagination";


const Friends: FC = () => {
  return (
    <>
      <section className="friends__main_window">
        <Preloader />
        <div className="friends__main_wrapper">
          <div className="friends__main_header">
            <p className="friends__main_header-text">Friends</p>
          </div>
          <div className="friends__main_friends">
            <FriendsRender name={""} id={0} followed={false} photo={{
              large: undefined,
              small: undefined
            }} />
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Friends;
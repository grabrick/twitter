import React from "react";
import undefinedAvatar from '../../../images/users__avatar.svg'

function FriendsComponent(state) {
    return (
        <div className="friends__item">
            <div className="friends__item_photos-wrapper">
                <img src={state.photos ? state.photos === null : undefinedAvatar} alt="" className='friends__item_photos' />
                <div className="friends__item_status"></div>
            </div>
            <div className="friends__item_wrapper-wrapper">
                <div className="friends__item_wrapper">
                    <h4 className="friends__item__name">{state.name}<span className='friends__item_name-id'>{state.userId}</span></h4>
                </div>
                <button className="friends__item_btn">{state.followed}</button>
            </div>
        </div>
    );
}

export default FriendsComponent;
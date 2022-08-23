import React from "react";
import picture from '../../../../../images/image__peple.svg'

function CatalogComponent(state) {
    return (
    <div className="message__profile">
        <img src={picture} alt="" className='message__picture' />
        <div className="message__profile_wrapper">
            <h4 className="message__name">{state.name}<span className='message__name_id'>{state.userId}</span></h4>
            <p className='message__last_activ'>{state.lastMessage}</p>
        </div>
    </div>
    );
}

export default CatalogComponent;
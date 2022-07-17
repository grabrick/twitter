import React from "react";
import picture from '../../../images/image__peple.svg'

function CatalogComponent(props) {
    return (
    <div className="message__profile">
        <img src={picture} alt="" className='message__picture' />
        <div className="message__profile_wrapper">
            <h4 className="message__name">{props.name}<span className='message__name_id'>{props.userId}</span></h4>
            <p className='message__last_activ'>{props.lastMessage}</p>
        </div>
    </div>
    );
}

export default CatalogComponent;
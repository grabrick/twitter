import React from 'react';
import loupe from '../../images/loops.svg'

function Message() {
    return (
    <section className='message'>
        <div className="message__header">
            <p className="message__header_title">Messages</p>
            <div className="message__btn">
                <div className="message__btn_settings" />
                <div className="message__btn_message" />
            </div>

            <div className="message__search">
                <img src={loupe} alt="loupe" className="message__search_loupe" />
                <input type="text" className="message__input" />
            </div>
        </div>
        
    </section>
    )
}

export default Message
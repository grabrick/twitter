import React from 'react';
import loupe from '../../images/loops.svg'
import picture from '../../images/image__peple.svg'
import '../Message/MessageCatalog.css'

function MessagesCatalog() {
    return (
    <section className='message'>
        <div className="message__header">
            <div className="message__header-wrapper">
                    <p className="message__header_title">Messages</p>
                <div className="message__btn">
                    <div className="message__btn_settings" />
                    <div className="message__btn_message" />
                </div>
            </div>

            <div className="message__search">
                <img src={loupe} alt="loupe" className="message__search_loupe" />
                <input type="text" className="message__input" placeholder='Search Direct Messages'/>
            </div>
        </div>

        <div className="message__profile">
            <img src={picture} alt="" className='message__picture' />
            <div className="message__profile_wrapper">
                <h4 className="message__name">Elena<span className='message__name_id'>@fffhrjkc</span></h4>
                <p className='message__last_activ'>Hi</p>
            </div>
        </div>
        
    </section>
    )
}

export default MessagesCatalog
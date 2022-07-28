import React from 'react';
import loupe from '../../../../images/loops.svg'
import CatalogMessage from '../CatalogMessage';
import './MessageCatalog.css'

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
            <CatalogMessage />
        </div>

    </section>
    )
}

export default MessagesCatalog
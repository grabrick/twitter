import React from 'react';
import '../MessageMain/MessageMain.css'
import avatar from '../../../images/image__peple.svg'
import info from '../../../images/information-line.svg'

function MessageMain () {
    return (
        <div className="messages__main">
            <div className="messages__main_header">
                <div className="messages__main_wrapper-wrap">
                    <img src={avatar} alt="" className='messages__main_header-picture avatar' />
                    <div className="messages__main_header-wrapper">
                        <h3 className="messages__main_header-name">Elena</h3>
                        <span className='messages__main_header-id'>@fffhrjkc</span>
                    </div>
                </div>
                <img src={info} alt="info" className="messages__main_header-info" />
            </div>

            <div className="messages__main_window">

            </div>

            <div className="messages__main_input">
                <textarea className='messages__text_input' placeholder='Start a new message'></textarea>
                <div className="messages__text_input-send"></div>
            </div>
        </div>
    );
}

export default MessageMain;
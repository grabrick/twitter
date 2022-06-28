import React from 'react';
import '../MessageMain/MessageMain.css'
import avatar from '../../../images/image__peple.svg'

function MessageMain () {
    return (
        <div className="messages__main">
            <div className="messages__main_header">
            <img src={avatar} alt="" className='message__picture' />
                <h3 className="messages__main_header-name">Elena</h3>
                <span className='message__name_id'>@fffhrjkc</span>
            </div>
        </div>
    );
}

export default MessageMain;
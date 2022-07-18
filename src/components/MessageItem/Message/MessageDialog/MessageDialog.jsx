import React from 'react';
import '../MessageDialog/MessageDialog.css'
import avatar from '../../../../images/image__peple.svg'
import info from '../../../../images/information-line.svg'
import { sendMessageCreator, updateMessageTextCreator } from '../../../../redux/state';
import DialogMessage from '../DialogMessage'

function MessageMain (props) {

    let newMessageBody = props.newMessageBody;

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateMessageTextCreator(body))
    }

    return (
      <div className="messages__main">
        <div className="messages__main_header">
          <div className="messages__main_wrapper-wrap">
            <img src={avatar} alt="" className="messages__main_header-picture avatar" />
            <div className="messages__main_header-wrapper">
              <h3 className="messages__main_header-name">Elena</h3>
              <span className="messages__main_header-id">@fffhrjkc</span>
            </div>
          </div>
          <img src={info} alt="info" className="messages__main_header-info" />
        </div>

        <div className="messages__main_window">
          <DialogMessage dialogData={props.dialogData} />
        </div>

        <div className="messages__main_input">
          <div className="feed__tweet_button-img"></div>
          <div className="feed__tweet_button-gif"></div>
          <textarea className="messages__text_input" value={newMessageBody} onChange={onMessageChange} placeholder="Start a new message" ></textarea>
          <div className="messages__text_input-send" onClick={addMessage}></div>
        </div>
      </div>
    );
}

export default MessageMain;
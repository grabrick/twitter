import React from 'react';
import '../MessageDialog/MessageDialog.css'
import avatar from '../../../../images/image__peple.svg'
import info from '../../../../images/information-line.svg'
import { sendMessageCreator, updateMessageTextCreator } from '../../../../redux/messageReducer';
import DialogComponent from './DialogComponent/DialogComponent';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.hook';

const MessageMain = () => {
    const messageBody = useAppSelector(state => state.message.newMessageBody)
    const dispatch = useAppDispatch()

    let onSendMessage = () => {
      dispatch(sendMessageCreator());
    };

    let onMessageChange = (e: any) => {
      let body = e.target.value;
      dispatch(updateMessageTextCreator(body));
    };

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
          <DialogComponent messageCatalog={[]} messageDialog={[]} newMessageBody={''} />
        </div>

          <div className="messages__main_input">
          <div className="button-img button__message_img">
            <input type="button" />
            <input className="feed__tweet_button-img" type="file"/>
          </div>
          <textarea className="messages__text_input" placeholder="Start a new message" value={messageBody} onChange={onMessageChange} ></textarea>
          <div className="messages__text_input-send" onClick={onSendMessage}></div>
        </div>
      </div>
    );
}

export default MessageMain;
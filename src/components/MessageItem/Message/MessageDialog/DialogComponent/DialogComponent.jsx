import React from "react";
import avatar from '../../../../../images/image__peple.svg'

function DialogComponent(props) {
    return (
        <div className="messages">
            <div className="messages__outer">
              <div className="messages__avatar">
                <img className="messages__avatar_dialog avatar" src={avatar} alt="" />
              </div>
              <div className="messages__inner">
                <div className="messages__bubble">
                </div>
                <div className="messages__actions">
                  <ul className="messages__action_menu"></ul>
                </div>
                <div className="messages__spacer">
                  <div className="message__spacer_wrapper">
                    <p className="messages__spacer_text">{props.message}</p>
                  </div>
                </div>
              </div>
              <div className="messages__status">
                <span className="avatar"></span>
              </div>
            </div>
        </div>
    );
}

export default DialogComponent;
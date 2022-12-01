import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import avatar from "../../../../../images/image__peple.svg";

function DialogComponent(state) {
  const message = useSelector(state => state.message.messageDialog)

  const intro = () => {
    if (message.length > 0) {
        return (
          <div className="messages__container">
            <div className="messages__intro">
              <p className="messages__intro_text">There hasn't been a dialogue yet</p>
            </div>
          </div>
        )
    } else {
      return (
        <div className="messages__outer">
          <div className="messages__avatar">
            <img
              className="messages__avatar_dialog avatar"
              src={avatar}
              alt=""
            />
          </div>
          <div className="messages__inner">
            <div className="messages__bubble"></div>
            <div className="messages__actions">
              <ul className="messages__action_menu"></ul>
            </div>
            <div className="messages__spacer">
              <div className="message__spacer_wrapper">
                <p className="messages__spacer_text">{state.message}</p>
              </div>
            </div>
          </div>
          <div className="messages__status">
            <span className="avatar"></span>
          </div>
        </div>
      );
    }
  };
  return <div className="messages">{intro()}</div>;
}

export default DialogComponent;

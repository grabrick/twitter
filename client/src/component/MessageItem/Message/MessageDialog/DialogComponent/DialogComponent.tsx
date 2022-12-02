import React, {FC} from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../../hooks/redux.hook";
import { IMessage } from "../../../../../types/types";
import avatar from "../../../../../images/image__peple.svg";

const DialogComponent: FC<IMessage> = () => {
  const dialogs = useAppSelector((state) => state.message.messageDialog);

  return (
    <>
      {dialogs.length > 0 ? (
        dialogs.map(({ message }, idx) => {
          return (
            <div key={idx} className="messages__outer">
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
                    <p className="messages__spacer_text">{message}</p>
                  </div>
                </div>
              </div>
              <div className="messages__status">
                <span className="avatar"></span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="messages__container">
          <div className="messages__intro">
            <p className="messages__intro_text">
              There hasn't been a dialogue yet
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DialogComponent;

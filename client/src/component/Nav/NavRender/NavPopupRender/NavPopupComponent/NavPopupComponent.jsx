import React from "react";
import CheckLine from "../../../../../images/check-line.svg"
import './NavPopupComponent.css'

function NavPopupComponent(state) {
    const array = state.id
    // const id = array.substring(0, 10)
    const id = array.slice(0, 15)

    return (
        <>
          <div className="Nav__user_popup-wrapper">
            <div className="Nav__user_popup-wrapper_wrap">
              <img
                src={state.photo}
                alt="avatar"
                className="Nav__user_popup-photo"
              />
              <div className="Nav__user_popup-wrapper">
                <p className="Nav__user_popup-name">{state.name}</p>
                <span className="Nav__user_popup-id">@{id}</span>
              </div>
              <img src={CheckLine} alt="" className="Nav__user_popup-more" />
            </div>
          </div>
        </>
      );
}

export default NavPopupComponent;
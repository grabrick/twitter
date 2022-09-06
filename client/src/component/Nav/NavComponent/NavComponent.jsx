import React, { useState } from "react";
import MoreLine from "../../../images/more-line.svg"
import NavProfilePopup from "../NavProfilePopup/NavProfilePopup";



function NavComponent(state) {
  const [isPopup, setIsPopup] = useState(false);

  const handlePopupClick = () => {
    setIsPopup("popupEdit");
  };
  return (
    <>
      <div className="Nav__user_main-wrapper" onClick={handlePopupClick}>
        <div className="Nav__user_main-wrapper_wrap">
          <img
            src={state.photo}
            alt="avatar"
            className="Nav__user_photo avatar"
          />
          <div className="Nav__user_wrapper">
            <p className="Nav__user_name">{state.name}</p>
            <span className="Nav__user_id">{state.id}</span>
          </div>
          <img src={MoreLine} alt="" className="Nav__user_more" />
        </div>
      </div>
      {isPopup === "popupEdit" && <NavProfilePopup close={setIsPopup} />}
    </>
  );
}

export default NavComponent;
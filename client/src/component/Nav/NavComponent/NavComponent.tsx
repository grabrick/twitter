import React, { useState } from "react";
import MoreLine from "../../../images/more-line.svg"
import { SmallPopup } from "../../../types/types";
import NavProfilePopup from "../NavProfilePopup/NavProfilePopup";



const NavComponent = (state: SmallPopup) => {
  const [isPopup, setIsPopup] = useState(false);
  const id = state.id
  const splitID = id.slice(0, 15)

  const handlePopupClick = () => {
    setIsPopup(true);
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
            <span className="Nav__user_id">@{splitID}</span>
          </div>
          <img src={MoreLine} alt="" className="Nav__user_more" />
        </div>
      </div>
      {isPopup && <NavProfilePopup close={() => setIsPopup(false)} />}
    </>
  );
}

export default NavComponent;
import React, { useState, FC } from "react";
import { useAppSelector } from "../../../hooks/redux.hook";
import MoreLine from "../../../images/more-line.svg"
import { SmallPopup } from "../../../types/types";
import NavProfilePopup from "../NavProfilePopup/NavProfilePopup";



const NavComponent: FC<SmallPopup> = (state) => {
  const Images = useAppSelector(state => state.profileUsers.users)
    .map((a: { id: number, photo: string | undefined; }) => <img key={a.id} src={a.photo} alt="" className="Nav__user_photo avatar" />)
  
  
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
          {Images}
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
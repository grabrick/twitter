import React, { FC } from "react";
import NavPopupComponent from "./NavPopupComponent/NavPopupComponent";
import { SmallPopup } from "../../../../types/types";
import { useAppSelector } from "../../../../hooks/redux.hook";


const NavPopupRender: FC<SmallPopup> = () => {
  const profile = useAppSelector(state => state.profileUsers.users)

  const profilElement = profile.map((profileRender: { name: string, photo: string, id: string }) => (
    <>
      <NavPopupComponent
        name={profileRender.name}
        photo={profileRender.photo}
        id={profileRender.id}
      />
    </>
  ))

  return (
    <>
      {profilElement}
    </>
  );
}

export default NavPopupRender;
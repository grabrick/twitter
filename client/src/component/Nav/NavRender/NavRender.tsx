import React, { FC } from "react";
import NavComponent from "../NavComponent/NavComponent";
import { useAppSelector } from "../../../hooks/redux.hook";
import { SmallPopup } from "../../../types/types";

const NavRender: FC<SmallPopup> = () => {
    const profile = useAppSelector(state => state.profileUsers.users)

    const profilElement = profile.map((profileRender: {name: string, photo: string, id: string}) => (
        <>
          <NavComponent
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

export default NavRender;
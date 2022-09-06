import React from "react";
import NavPopupComponent from "../NavPopupRender/NavPopupComponent/NavPopupComponent";
import {useSelector} from 'react-redux'


function NavPopupRender() {
    const profile = useSelector(state => state.profileUsers.users)

    const profilElement = profile.map((profileRender) => (
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
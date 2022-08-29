import React from "react";
import NavComponent from "../NavComponent/NavComponent";
import {useSelector} from 'react-redux'


function NavRender() {
    const profile = useSelector(state => state.profileUsers.users)

    const profilElement = profile.map((profileRender) => (
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
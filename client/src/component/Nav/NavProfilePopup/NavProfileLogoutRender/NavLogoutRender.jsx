import { useSelector } from "react-redux";
import { React } from "react";

function NavLogoutRender() {
    const userId = useSelector(state => state.profileUsers.users)
        .map((id) => {
            return <span>{id.id}</span>
        })
    return (
        <p>Log out {userId}</p>
    );
}

export default NavLogoutRender;
import { useSelector } from "react-redux";
import { React } from "react";

function NavLogoutRender() {
    //     const userId = useSelector(state => state.profileUsers.users)
    // const array = userId
    // const id = array.slice(0, 15).map((id) => {
    //     return <span>{id.id}</span>
    // })

    const userId = useSelector(state => state.profileUsers.users)
        .map((id) => {
            return <span>@{id.id.slice(0, 15)}</span>
        })
    return (
        <p>Log out{userId}</p>
    );
}

export default NavLogoutRender;
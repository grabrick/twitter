import { FC } from "react";
import { useAppSelector } from "../../../../hooks/redux.hook";

const NavLogoutRender: FC = () => {
    //     const userId = useSelector(state => state.profileUsers.users)
    // const array = userId
    // const id = array.slice(0, 15).map((id) => {
    //     return <span>{id.id}</span>
    // })

    const userId = useAppSelector(state => state.profileUsers.users)
        .map((id: { id: string }) => {
            return <span key={id.id}>@{id.id.slice(0, 15)}</span>
        })
    return (
        <p>Log out{userId}</p>
    );
}

export default NavLogoutRender;
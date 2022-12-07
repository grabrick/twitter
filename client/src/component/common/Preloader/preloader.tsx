import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux.hook";
import fetchingLoader from '../../../images/fetchingLoader.gif'

const Preloader: FC = () => {
    const isFetching = useAppSelector((state) => state.friends.isFetching)
    return (
        <>
        {isFetching ? <div className="preloader"><img className="proloader-image" src={fetchingLoader} alt="" /></div> : null}
        </>
    );
}

export default Preloader;
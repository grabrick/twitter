import React from "react";
import { useSelector } from 'react-redux'
import fetchingLoader from '../../../images/fetchingLoader.gif'

function Preloader() {
    const isFetching = useSelector((state) => state.friends.isFetching)
    return (
        <>
        {isFetching ? <div className="preloader"><img className="proloader-image" src={fetchingLoader} alt="" /></div> : null}
        </>
    );
}

export default Preloader;
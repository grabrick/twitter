import React from "react";
import { Route, Routes, Redirect } from 'react-router-dom';
import authPage from "./pages/authPage";
import createPage from "./pages/createPage";
import detailPage from "./pages/detailPage";
import linkPage from "./pages/linkPage";

function useRoutes(isAuthticated) {
    if(isAuthticated) {
        return(
            <Routes>
                <Route path="/links" exact element={linkPage} />
                <Route path="/create" exact element={createPage} />
                <Route path="/detail" element={detailPage} />
                <Redirect to="/create" />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact element={authPage} /> 
            <Redirect to="/" /> 
        </Routes>
    )
}

export default useRoutes;
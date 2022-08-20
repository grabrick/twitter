import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import LinkPage from './pages/LinkPage';
import CreatePage from './pages/CreatePage'
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";

function useRoutes(isAuthticated) {
    if(isAuthticated) {
        return (
            <Routes>
              <Route path="/links" exact element={ <LinkPage /> } />
              <Route path="/create" element={ <CreatePage /> } />
              <Route path="/detail/:id" element={ <DetailPage /> } />

              {/* --------- Redirect------- */}
              <Route element={<Navigate to="/create" replace />} /> 
            </Routes>
        );
    }
        return (
            <Routes>
              <Route path="/" element={ <AuthPage /> } />

              {/* --------- Redirect------- */}
              <Route element={<Navigate to="/" replace />} />
            </Routes>
        );
}

export default useRoutes;
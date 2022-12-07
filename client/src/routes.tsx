import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import FeedHome from './component/Pages/FeedHome/FeedHome';
import FeedProfile from './component/Pages/FeedProfile/FeedProfile';
import FeedMessage from './component/Pages/FeedMessage/FeedMessage'
// import ProfileSwitcher from '../src/component/Pages/FeedProfile/ProfileSwitcher/ProfileSwitcher';
import FeedFriends from './component/Pages/FeedFriends/FeedFriends';
import FeedAuth from './component/Pages/FeedAuth/FeedAuth'

function useRoutes(isAuthticated: boolean) {
    if(isAuthticated) {
        return (
          <div className="page">
            <Routes>
              <Route path="/" element={<Navigate to="/Home" replace />} />

              <Route path="/Home" element={<FeedHome />} />

              <Route path="/Profile" element={<FeedProfile />} />

              <Route path="/Message" element={<FeedMessage />} />

              {/* <Route path="/Profile/users" element={<ProfileSwitcher />} /> */}

              <Route path="/Friends" element={<FeedFriends />} />

              {/* --------- Redirect------- */}
              <Route path="/Auth" element={<Navigate to="/Home" replace />} />
            </Routes>
          </div>
        );
    }
        return (
          <Routes>
            <Route path="/Auth" element={<FeedAuth />} />
            
            {/* --------- Redirect------- */}
            <Route path="/Home" element={<Navigate to="/Auth" replace />} />

            <Route path="/Profile" element={<Navigate to="/Auth" replace />} />

            <Route path="/Message" element={<Navigate to="/Auth" replace />} />

            {/* <Route path="/Profile/users" element={<Navigate to="/Auth" replace />} /> */}

            <Route path="/Friends" element={<Navigate to="/Auth" replace />} />

            {/* --------- Redirect------- */}
            <Route path="/" element={<Navigate to="/Auth" replace />} />
          </Routes>
        );
}

export default useRoutes;
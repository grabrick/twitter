import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import FeedHome from '../src/component/Pages/FeedHome/FeedHome';
import FeedProfile from '../src/component/Pages/FeedProfile/FeedProfile';
import FeedMessage from '../src/component/Pages/FeedMessage/FeedMessage'
import ProfileSwitcher from '../src/component/Pages/FeedProfile/ProfileSwitcher/ProfileSwitcher';
import FeedFriends from '../src/component/Pages/FeedFriends/FeedFriends';
import FeedAuth from '../src/component/Pages/FeedAuth/FeedAuth'

function useRoutes(isAuthticated) {
    if(isAuthticated) {
        return (
          <div className="page">
            <Routes>
              <Route path="/" element={<FeedHome />} />

              <Route path="/Profile" element={<FeedProfile />} />

              <Route path="/Message" element={<FeedMessage />} />

              <Route path="/Profile/users" element={<ProfileSwitcher />} />

              <Route path="/Friends" element={<FeedFriends />} />

              {/* --------- Redirect------- */}
              <Route element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        );
    }
        return (
            <Routes>
              <Route path="/" element={ <FeedAuth /> } />

              {/* --------- Redirect------- */}
              <Route element={<Navigate to="/" replace />} />
            </Routes>
        );
}

export default useRoutes;
import FeedHome from './components/Pages/FeedHome/FeedHome';
import FeedProfile from './components/Pages/FeedProfile/FeedProfile';
import FeedMessage from './components/Pages/FeedMessage/FeedMessage'
import ProfileSwitcher from './components/Pages/FeedProfile/profileSwitcher/profileSwitcher';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<FeedHome/>} />

        <Route path='/Profile' element={<FeedProfile/>} />

        <Route path='/Message' element={<FeedMessage/>} />

        <Route path='/Profile/users' element={ProfileSwitcher} />
      </Routes>
    </div>
  );
}

export default App;

import FeedHome from './components/element/FeedHome/FeedHome';
import FeedProfile from './components/element/FeedProfile/FeedProfile';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/Home" element={<FeedHome />} />
        <Route path='/Profile' element={<FeedProfile />} />
      </Routes>
    </div>
  );
}

export default App;

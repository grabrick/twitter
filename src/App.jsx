import FeedHome from './components/element/FeedHome/FeedHome';
import FeedProfile from './components/element/FeedProfile/FeedProfile';
import FeedMessage from './components/element/FeedMessage/FeedMessage'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" render={() => <FeedHome />} />
        <Route path='/Profile' element={<FeedProfile />} />
        <Route path='/Message' render={() => <FeedMessage />} />
      </Routes>
    </div>
  );
}

export default App;

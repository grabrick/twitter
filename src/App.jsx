import FeedHome from './components/Pages/FeedHome/FeedHome';
import FeedProfile from './components/Pages/FeedProfile/FeedProfile';
import FeedMessage from './components/Pages/FeedMessage/FeedMessage'
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
      </Routes>
    </div>
  );
}

export default App;

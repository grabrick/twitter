import FeedHome from './components/Pages/FeedHome/FeedHome';
import FeedProfile from './components/Pages/FeedProfile/FeedProfile';
import FeedMessage from './components/Pages/FeedMessage/FeedMessage'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<FeedHome tweetData={props.state.tweetData} newsData={props.state.newsData} addPost={props.addPost} />} />
        <Route path='/Profile' element={<FeedProfile tweetData={props.state.tweetData} newsData={props.state.newsData} />} />
        <Route path='/Message' element={<FeedMessage />} />
      </Routes>
    </div>
  );
}

export default App;

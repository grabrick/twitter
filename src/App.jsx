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
        <Route path="/" element={<FeedHome 
          tweetData={props.state.mainTweetData.tweetData} 
          newsData={props.state.newsData} 
          dispatch={props.dispatch} 
          newText={props.state.mainTweetData}
        />} />

        <Route path='/Profile' element={<FeedProfile 
          tweetData={props.state.mainTweetData.tweetData} 
          newsData={props.state.newsData} 
        />} />

        <Route path='/Message' element={<FeedMessage
          dispatch={props.dispatch}
          catalogData={props.state.messageData.messageCatalog}
          messageData={props.state.messageData.messageDialog}
          newMessage={props.state.messageData}
        />} />
      </Routes>
    </div>
  );
}

export default App;

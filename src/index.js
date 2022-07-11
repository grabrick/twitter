import './index.css';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { addPost, updateNewTweetText } from './redux/state';  


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTrea = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewTweetText={updateNewTweetText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTrea(state)

subscribe(rerenderEntireTrea)
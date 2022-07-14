import './index.css';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTrea = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={store.addPost.bind(store)} updateNewTweetText={store.updateNewTweetText.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTrea(store.getState())

store.subscribe(rerenderEntireTrea)
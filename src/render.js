import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { addPost } from './redux/state';    

export let rerenderEntireTrea = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

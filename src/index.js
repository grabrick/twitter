import './index.css';
import { store } from './redux/store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
    </Provider>
  );

// rerenderEntireTrea(store.getState())
import Home from './components/Home/Home';
// import Nav from './components/Nav/Nav';
// import News from './components/News/News';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

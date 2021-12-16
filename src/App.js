import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;

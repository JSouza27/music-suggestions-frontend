import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import LoginPage from './components/auth/login';
import './App.css';
import PrivateRouter from './utils/router/privateRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

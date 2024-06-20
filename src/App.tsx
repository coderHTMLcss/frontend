import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import PrivateRouter from './utils/router/privateRouter';
import AuthRootComponent from './components/auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;

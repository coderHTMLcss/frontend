import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import PrivateRouter from './utils/router/privateRouter';
import AuthRootComponent from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout';

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="App">
            <Routes>
              <Route element={<PrivateRouter />}>
                <Route path='' element={<Home />} />
              </Route>
              <Route path='login' element={<AuthRootComponent />} />
              <Route path='register' element={<AuthRootComponent />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

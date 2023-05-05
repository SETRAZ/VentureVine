import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import questTheme from 'src/MyDesignSystemLightTheme';
import Homepage from 'src/components/Homepage/Homepage';
import SelectionPage from './components/Homepage/SelectionPage';
import UserRegisterPageWOImage from './components/Homepage/UserRegisterPageWOImage';
import StartUpRegistrationPage from './components/Homepage/StartUpRegistrationPage';
import StartUpLandingPage from './components/Homepage/StartUpLandingPage';
import UserLandingPage from './components/Homepage/UserLandingPage';
import UserLoginPage from './components/Homepage/UserLoginPage';
import StartUpLoginPage from './components/Homepage/StartUpLoginPage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<SelectionPage />} />
          <Route path="/user-registration" element={<UserRegisterPageWOImage />} />
          <Route path="/start-up-registration" element={<StartUpRegistrationPage />} />
          <Route path="/start-up-landing-page" element={<StartUpLandingPage />} />
          <Route path="/user-landing-page" element={<UserLandingPage />} />
          <Route path="/user-log-in-page" element={<UserLoginPage />} />
          <Route path="/start-up-log-in-page" element={<StartUpLoginPage />} />
         
          

        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

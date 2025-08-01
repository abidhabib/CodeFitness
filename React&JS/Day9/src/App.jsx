import React from 'react';
import Profile from './User/Profile';
import { UserProvider } from './Context/UserContext';
import SwitchTheme from './components/SwitchTheme';
import { ThemeProvider } from './Context/Theme';


const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
           <SwitchTheme  />
        <Profile />
    </UserProvider>
      </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { Application } from './app-frame';
import { NavigationProvider, UserProvider } from './context';

export const App = () => {
  return (
    <UserProvider>
      <NavigationProvider>
        <Application />
      </NavigationProvider>
    </UserProvider>
  );
};

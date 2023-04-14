import React from 'react';
import './App.css';
import { Application } from './app-frame';
import { NavigationProvider } from './context';

export const App = () => {
  return (
    <NavigationProvider>
      <Application />
    </NavigationProvider>
  );
};

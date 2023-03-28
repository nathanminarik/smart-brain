import React from 'react';
import { NavigationItem } from './NaviagtionItem';

export const Navigation = ({ onRouteChange, route }) => {
  switch (route) {
    case 'home':
      return (
        <NavigationItem
          onRouteChange={onRouteChange}
          label={'Sign Out'}
          routeToGoto={'signin'}
        />
      );
    case 'register':
      return (
        <NavigationItem
          onRouteChange={onRouteChange}
          label={'Sign In'}
          routeToGoto={'signin'}
        />
      );
    default:
      return (
        <NavigationItem
          onRouteChange={onRouteChange}
          label={'Register'}
          routeToGoto={'register'}
        />
      );
  }
};

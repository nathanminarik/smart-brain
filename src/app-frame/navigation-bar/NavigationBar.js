import React from 'react';
import { Navigation } from './../../components/Navigation/Navigation';

export const NavigationBar = ({ onRouteChange, route }) => (
  <Navigation onRouteChange={onRouteChange} route={route}></Navigation>
);

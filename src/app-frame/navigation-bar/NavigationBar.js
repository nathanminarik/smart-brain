import React from 'react';
import { NavigationItem } from './../../components';
import { useNavigation } from '../../hooks';

export const NavigationBar = () => {
  const [page] = useNavigation();
  switch (page) {
    case 'home':
      return <NavigationItem label={'Sign Out'} pageToGoto={'signin'} />;
    case 'register':
      return <NavigationItem label={'Sign In'} pageToGoto={'signin'} />;
    default:
      return <NavigationItem label={'Register'} pageToGoto={'register'} />;
  }
};

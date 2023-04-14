import React from 'react';
import { NavigationItem } from './../../components';
import { useNavigation, useUser } from '../../hooks';
import { Routes } from '../../constants';

export const NavigationBar = () => {
  const [page, navigate] = useNavigation();
  const [, setUser] = useUser();

  const generateClickHandler = (pageToGoto, clearUser) => (e) => {
    e.preventDefault();
    clearUser && setUser(undefined);
    navigate(pageToGoto);
  };

  const renderNavLinks = () => {
    switch (page) {
      case 'home':
        return (
          <NavigationItem
            label={'Sign Out'}
            clickHandler={generateClickHandler(Routes.Signin, true)}
          />
        );
      case 'register':
        return (
          <NavigationItem
            label={'Sign In'}
            clickHandler={generateClickHandler(Routes.Signin)}
          />
        );
      default:
        return (
          <NavigationItem
            label={'Register'}
            clickHandler={generateClickHandler(Routes.Register)}
          />
        );
    }
  };

  return (
    <nav
      className="mb2 mt2"
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      {renderNavLinks()}
    </nav>
  );
};

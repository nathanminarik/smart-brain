import React, { useEffect } from 'react';
import ParticlesBg from 'particles-bg';
import './Application.css';
import { HomePage, RegisterPage, SignInPage } from './../pages';
import { NavigationBar } from './../navigation-bar';
import { useNavigation } from './../../hooks';

export const Application = () => {
  const [page] = useNavigation();

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  }, []);

  const renderNavBar = () => <NavigationBar className="mt2 mb2" />;

  const renderPage = ({ page }) => {
    switch (page) {
      case 'register':
        return <RegisterPage />;
      case 'home':
        return <HomePage />;
      default:
        return <SignInPage />;
    }
  };

  return (
    // For application context providers goto: './../../App.js'
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      {renderNavBar()}
      {renderPage({ page })}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import './App.css';
import { HomePage, NavigationBar, RegisterPage, SignInPage } from './app-frame';

function App() {
  const [route, setRoute] = useState('signin');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  }, []);

  const onRouteChange = (route) => setRoute(route);

  const renderNavBar = ({ route }) => (
    <NavigationBar route={route} onRouteChange={onRouteChange} />
  );

  const renderPage = ({ route }) => {
    switch (route) {
      case 'register':
        return <RegisterPage onRouteChange={onRouteChange} />;
      case 'home':
        return <HomePage />;
      default:
        return <SignInPage onRouteChange={onRouteChange} />;
    }
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      {renderNavBar({ route })}
      {renderPage({ route })}
    </div>
  );
}

export default App;

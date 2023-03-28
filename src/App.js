import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import './App.css';
import { HomePage, NavigationBar, RegisterPage, SignInPage } from './app-frame';
import { useClarafaiRequestOptions } from './hooks/use-create-clarafai-request-options';
import { useCalculateFaceLocations } from './hooks/use-calculate-face-location';

function App() {
  const [input, setInput] = useState();
  const [boxes, setBoxes] = useState();
  const [errorStateObject, setErrorStateObject] = useState(undefined);
  const [route, setRoute] = useState('signin');

  const { fetchFaceDetection } = useClarafaiRequestOptions();
  const { getRegionsFaceLoacationDimensions } = useCalculateFaceLocations();

  const onInputChange = (event) => {
    setInput(event.target.value);
    setErrorStateObject(undefined);
  };

  const onButtonSubmit = async () => {
    const { error, outputs } = await fetchFaceDetection(input);
    if (error) {
      return setErrorStateObject(error);
    }

    const faceBoxSets = getRegionsFaceLoacationDimensions(
      outputs[0].data.regions,
      'input-image'
    );

    setBoxes(faceBoxSets);
  };

  const onRouteChange = (route) => setRoute(route);

  const renderNavBar = ({ route }) => (
    <NavigationBar route={route} onRouteChange={onRouteChange} />
  );

  const renderPage = ({ route }) => {
    switch (route) {
      case 'register':
        return <RegisterPage onRouteChange={onRouteChange} />;
      case 'home':
        return (
          <HomePage
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
            errorStateObject={errorStateObject}
            boxes={boxes}
            input={input}
          />
        );
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

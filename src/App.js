import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Logo } from './components/Logo/Logo';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Rank } from './components/Rank/Rank';
import { FacialRecognition } from './components/FacialRecognition/FacialRecognition';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { useClarafaiRequestOptions } from './hooks/use-create-clarafai-request-options';
import { useCalculateFaceLocations } from './hooks/use-calculate-face-location';

function App() {
  const [input, setInput] = useState();
  const [boxes, setBoxes] = useState();
  const [errorStateObject, setErrorStateObject] = useState(undefined);

  const { fetchFaceDetection } = useClarafaiRequestOptions();
  const {
    getFaceLocationDimensions,
    getRegionsFaceLoacationDimensions,
  } = useCalculateFaceLocations();

  const onInputChange = (event) => {
    setInput(event.target.value);
    setErrorStateObject(undefined);
  };

  const onButtonSubmit = async () => {
    const { error, outputs, status } = await fetchFaceDetection(input);
    if (error) {
      return setErrorStateObject(error);
    }

    const faceBoxSets = getRegionsFaceLoacationDimensions(
      outputs[0].data.regions,
      'input-image'
    );

    setBoxes(faceBoxSets);
  };

  return (
    <div className="App">
      <ParticlesBg type="tadpole" bg={true} />
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      ></ImageLinkForm>
      {errorStateObject && (
        <ErrorMessage error={errorStateObject}></ErrorMessage>
      )}
      <FacialRecognition boxes={boxes} imageUrl={input}></FacialRecognition>
    </div>
  );
}

export default App;

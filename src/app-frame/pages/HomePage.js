import React, { useState } from 'react';
import {
  ErrorMessage,
  ImageLinkForm,
  Logo,
  Rank,
  FacialRecognition,
} from './../../components';

import {
  useClarafaiRequestOptions,
  useCalculateFaceLocations,
} from './../../hooks';

export const HomePage = () => {
  const [input, setInput] = useState();
  const [boxes, setBoxes] = useState();
  const [errorStateObject, setErrorStateObject] = useState(undefined);
  const { fetchFaceDetection } = useClarafaiRequestOptions();
  const { getRegionsFaceLoacationDimensions } = useCalculateFaceLocations();

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

  const onInputChange = (event) => {
    setInput(event.target.value);
    setErrorStateObject(undefined);
  };

  return (
    <div>
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
};

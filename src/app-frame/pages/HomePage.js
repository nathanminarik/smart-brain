import React from 'react';
import { ErrorMessage } from './../../components/ErrorMessage/ErrorMessage';
import { ImageLinkForm } from './../../components/ImageLinkForm/ImageLinkForm';
import { Logo } from './../../components/Logo/Logo';
import { Rank } from './../../components/Rank/Rank';
import { FacialRecognition } from './../../components/FacialRecognition/FacialRecognition';

export const HomePage = ({
  onInputChange,
  onButtonSubmit,
  errorStateObject,
  boxes,
  input,
}) => {
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

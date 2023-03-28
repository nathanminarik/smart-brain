import React from 'react';

export const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'This Magic Brain will detect face in your pictures. Give it a try.'}
      </p>
      <div className="centerFlex">
        <div>
          <input
            onChange={onInputChange}
            type="text"
            className="f4 pa2 w-70 center"
          ></input>
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            {'Detect'}
          </button>
        </div>
      </div>
    </div>
  );
};

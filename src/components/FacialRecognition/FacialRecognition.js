import React from 'react';
import './FacialRecognition.css';

export const FacialRecognition = ({ imageUrl, boxes }) => {
  console.log({ boxes });

  return (
    <div className="centerFlex mt4">
      <div className="absolute mt2">
        <img
          alt="Submitted url with facial recognition analysis"
          id="input-image"
          src={imageUrl}
          width="500px"
          height="auto"
        ></img>
        {boxes &&
          boxes.map((box) => (
            <div
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

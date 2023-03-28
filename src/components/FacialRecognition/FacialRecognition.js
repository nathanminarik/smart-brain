import React from 'react';
import './FacialRecognition.css';

export const FacialRecognition = ({ imageUrl, boxes }) => (
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
        boxes.map((box, idx) => (
          <div
            className="bounding-box"
            key={idx}
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

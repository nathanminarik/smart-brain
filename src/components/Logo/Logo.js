import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import logo from './smart-brain-logo.png';

export const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt tiltReverse={true}>
        <div className="tilt h4 w4">
          <div
            className="h100 w100"
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              verticalAlign: 'middle',
            }}
          >
            <img className="" src={logo} alt="Logo"></img>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

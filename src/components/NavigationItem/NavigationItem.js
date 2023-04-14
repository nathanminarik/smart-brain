import React from 'react';

export const NavigationItem = ({ label, clickHandler }) => {
  return (
    <button
      className="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray pointer mr2 ml2"
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};

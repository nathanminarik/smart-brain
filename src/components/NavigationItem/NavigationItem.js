import React from 'react';
import { useNavigation } from '../../hooks';

export const NavigationItem = ({ label, pageToGoto }) => {
  const [, navigate] = useNavigation();
  return (
    <button
      className="f6 link dim ba bw1 ph3 pv2 mb2 dib mid-gray pointer mr2 ml2"
      onClick={() => {
        navigate(pageToGoto);
      }}
    >
      {label}
    </button>
  );
};

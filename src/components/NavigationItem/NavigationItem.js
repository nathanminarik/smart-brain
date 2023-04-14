import React from 'react';
import { useNavigation } from '../../hooks';

export const NavigationItem = ({ label, pageToGoto }) => {
  const [, setPage] = useNavigation();
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => {
          setPage(pageToGoto);
        }}
        className="f3 link dim black underline pa3 pointer"
      >
        {label}
      </p>
    </nav>
  );
};

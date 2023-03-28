import React from 'react';

export const NavigationItem = ({ label, onRouteChange, routeToGoto }) => (
  <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <p
      onClick={() => {
        onRouteChange(routeToGoto);
      }}
      className="f3 link dim black underline pa3 pointer"
    >
      {label}
    </p>
  </nav>
);

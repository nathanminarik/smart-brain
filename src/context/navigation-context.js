import React, { useMemo, useState } from 'react';

import { Routes } from '../constants';

const NavigationContext = React.createContext(['', () => {}]);

const NavigationProvider = ({ children }) => {
  const urlPath = window.location.pathname.slice(1).toLowerCase();
  /* Set the default page to Home if not specified otherwise in the URL */
  const [page, setPageState] = useState(urlPath || Routes.Signin);

  const setPage = useMemo(
    () => (newPage) => {
      setPageState(newPage);
      window.history.pushState({}, newPage, newPage);
    },
    [setPageState]
  );

  const value = useMemo(() => [page, setPage], [page, setPage]);
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };

import React, { useMemo, useState } from 'react';

const UserContext = React.createContext(['', () => {}]);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const value = useMemo(() => [user, setUser], [user, setUser]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

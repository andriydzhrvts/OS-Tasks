import React, { createContext, useCallback, useState } from 'react';
import { userService } from 'services/userService';

export const CurrentUserContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem('token');
      const { data } = accessToken ? await userService.getUser(accessToken) : isAuthenticated;
      if (data) {
        setCurrentUser(data);
        setIsLoading(false);
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error(e);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        fetchUser,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AppProvider;

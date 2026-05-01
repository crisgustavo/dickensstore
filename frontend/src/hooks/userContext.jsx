/* eslint-disable */
import { createContext, useContext, useState, useCallback } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const userStorageInfo = localStorage.getItem('devburguer:userData');
    return userStorageInfo ? JSON.parse(userStorageInfo) : {};
  });

  const putUserData = useCallback((userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem('devburguer:userData', JSON.stringify(userInfo));
  }, []);

  const logout = useCallback(() => {
    setUserInfo({});
    localStorage.removeItem('devburguer:userData');
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a valid Provider');
  }

  return context;
};

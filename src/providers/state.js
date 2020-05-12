import React, { createContext, useState, useContext } from 'react';

import { movies } from '../data';

// create context
const AppStateContext = createContext();

// context provider
export function AppStateProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [picked, setPicked] = useState([]);

  const value = {
    searchValue,
    setSearchValue,
    picked,
    setPicked,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  // fool proof error message
  if (!context) {
    throw new Error('forgetting the AppStateContext context provider maybe?');
  }
  return context;
}

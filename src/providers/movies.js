import React, { createContext, useContext } from 'react';
import { movies } from '../data';

// 1. create context
export const MoviesContext = createContext();

// 2. create provider
export function MoviesProvider({ children }) {
  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
}

// custom hook
export function useMovies() {
  const context = useContext(MoviesContext);
  // fool proof error message
  if (!context) {
    throw new Error('forgetting the MoviesProvider context provider maybe?');
  }
  return context;
}

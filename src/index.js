import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'normalize.css';
import './index.css';
// data

// components
import App from './App';
import { MoviesProvider } from './providers/movies';
import { AppStateProvider } from './providers/state';

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

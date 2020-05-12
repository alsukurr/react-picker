import React, { Fragment } from 'react';
import MoviePicker from './components/MoviePicker';
import Search from './components/Search';
import Picked from './components/Picked';
import ResetSearch from './components/ResetSearch';

function App() {
  return (
    <Fragment>
      <Search />
      <Picked />
      <MoviePicker />
      <ResetSearch />
    </Fragment>
  );
}

export default App;

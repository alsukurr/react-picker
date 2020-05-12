import React from 'react';
import List from './List';

import { useMovies } from '../providers/movies';
import { useAppState } from '../providers/state';

export default function MoviePicker() {
  const movies = useMovies();
  const { searchValue, picked, setPicked } = useAppState();
  const filteredMovies = movies
    .filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(item => !picked.includes(item.id));

  const addToPicked = id => {
    console.log({ id });
    // new array that takes the existing + new id
    setPicked([...picked, id]);
  };
  return (
    <div>
      <List onItemClick={addToPicked} movieList={filteredMovies} />
    </div>
  );
}

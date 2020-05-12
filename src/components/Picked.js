import React, { Fragment } from 'react';
import List from './List';
import { useMovies } from '../providers/movies';
import { useAppState } from '../providers/state';

export default function Picked() {
  const { picked, setPicked } = useAppState();
  const movies = useMovies();

  const pickedMovies = movies.filter(item => picked.includes(item.id));

  const removeFromPicked = id => {
    setPicked(picked.filter(item => item !== id));
  };

  const hasMovies = pickedMovies.length > 0;

  console.log(pickedMovies, hasMovies);

  return (
    <div className="picked">
      <h2>
        {hasMovies ? 'Your picked movies' : 'Click on a movie title to pick it'}
      </h2>

      {hasMovies && (
        <Fragment>
          <List movieList={pickedMovies} onItemClick={removeFromPicked} />
          <hr></hr>
        </Fragment>
      )}
    </div>
  );
}

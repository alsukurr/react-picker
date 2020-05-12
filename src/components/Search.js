import React, { useRef, useEffect } from 'react';
import { useAppState } from '../providers/state';

export default function Search() {
  const { searchValue, setSearchValue } = useAppState();
  const inputRef = useRef();

  // console.log({ inputRef });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <header>
      <input
        className="search"
        type="text"
        placeholder="type a movie title.."
        value={searchValue}
        onChange={handleChange}
        ref={inputRef}
      />
      {/* <span>state value: {seachValue}</span> */}
    </header>
  );
}

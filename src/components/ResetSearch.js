import React from 'react';
import { useAppState } from '../providers/state';

export default function ResetSearch() {
  const { searchValue, setSearchValue } = useAppState();

  if (!searchValue) {
    return null;
  }

  return (
    <button className="reset" onClick={() => setSearchValue('')}>
      reset search
    </button>
  );
}

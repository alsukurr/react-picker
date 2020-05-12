import React from 'react';

export default function List({ movieList, onItemClick }) {
  return (
    <div>
      <ul className="item-list">
        {movieList.map(item => (
          <li className="item" onClick={() => onItemClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

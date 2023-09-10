'use client';
import React from 'react';
import posts from '../../../data/posts.json';

interface Ownprops {
  categoryHandler: (category: string) => void;
}

function Postaside({ categoryHandler }: Ownprops) {
  const categories = posts.map((post) => post.category);
  const set = new Set(categories);
  const uniqueCategories = [...set];

  return (
    <aside>
      <div>Category</div>
      <ul>
        <li
          onClick={(e) => {
            categoryHandler(e.currentTarget.innerHTML);
          }}
        >
          All Posts
        </li>
        {uniqueCategories.map((category, index) => (
          <li
            key={index}
            onClick={(e) => {
              categoryHandler(e.currentTarget.innerHTML);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Postaside;

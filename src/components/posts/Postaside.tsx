'use client';
import React from 'react';
import posts from '../../../data/posts.json';

function Postaside() {
  const categories = posts.map((post) => post.category);
  const set = new Set(categories);
  const uniqueCategories = [...set];
  return (
    <aside>
      <div>Category</div>
      <ul>
        <li>All Posts</li>
        {uniqueCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Postaside;

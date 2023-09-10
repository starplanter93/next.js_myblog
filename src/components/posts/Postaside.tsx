'use client';
import React, { useState } from 'react';
import posts from '../../../data/posts.json';

interface Ownprops {
  categoryHandler: (category: string) => void;
}

function Postaside({ categoryHandler }: Ownprops) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const categories = posts.map((post) => post.category);
  const set = new Set(categories);
  const uniqueCategories = [...set];

  const onClickCategory = (e: React.MouseEvent) => {
    categoryHandler(e.currentTarget.innerHTML);
    setSelectedCategory((prev) => {
      if (prev === e.currentTarget.innerHTML) {
        return '';
      }
      e.currentTarget.innerHTML;
      return e.currentTarget.innerHTML;
    });
  };

  return (
    <aside className='flex flex-col mt-3 ml-6'>
      <div className='mb-3 font-bold border-sky-500 border-b-4'>Category</div>
      <ul>
        <li
          className={`flex justify-center`}
          onClick={(e) => {
            categoryHandler(e.currentTarget.innerHTML);
            setSelectedCategory(e.currentTarget.innerHTML);
          }}
        >
          All Posts
        </li>
        {uniqueCategories.map((category, index) => (
          <li
            className={`flex justify-center ${
              selectedCategory === category ? 'text-sky-500' : 'text-black'
            }`}
            key={index}
            onClick={onClickCategory}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Postaside;

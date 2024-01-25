'use client';
import Postaside from '@/components/posts/Postaside';
import Postbody from '@/components/posts/Postbody';
import React, { useState } from 'react';

export default function PostsPage() {
  const [category, setCategory] = useState<string>('All Posts');

  const categoryHandler = (category: string) => {
    setCategory((prev: string) => {
      if (prev === category) {
        return 'All Posts';
      }
      return category;
    });
  };

  return (
    <div className='flex'>
      <Postbody selectedCategory={category} />
      <Postaside categoryHandler={categoryHandler} />
    </div>
  );
}

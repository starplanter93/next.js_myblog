'use client';
import { ALL_POSTS } from '@/constant/constant';
import { Post } from '@/types/types';
import { useState } from 'react';
import PostsGrid from '../home/PostsGrid';
import Categories from './Categories';

interface Ownprops {
  posts: Post[];
  categories: string[];
}

export default function FilterablePosts({ posts, categories }: Ownprops) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className='flex m-4'>
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        setSelected={setSelected}
      />
    </section>
  );
}

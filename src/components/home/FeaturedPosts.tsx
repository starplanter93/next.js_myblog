import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nanum_Gothic } from 'next/font/google';
import PostsGrid from './PostsGrid';

const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

export default function FeaturedPosts() {
  return (
    <section>
      <h2 className={`${gothic800.className} text-lg my-4`}>Featured Posts</h2>
      <PostsGrid />
    </section>
  );
}

import React from 'react';
import posts from '../../../data/posts.json';
import Link from 'next/link';
import Image from 'next/image';
import { Nanum_Gothic } from 'next/font/google';

const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

function Featuredposts() {
  const featuredPosts = posts.filter((post) => post.featured);
  return (
    <div>
      <h2 className={`${gothic800.className} text-lg my-4`}>Featured Posts</h2>
      <ul className='grid grid-cols-3 gap-7 my-4'>
        {featuredPosts.map(
          ({ title, description, category, date, path }, index) => (
            <li
              className='border border-solid border-inherit rounded-md shadow-md hover:shadow-lg'
              key={index}
            >
              <Link
                className='flex flex-col items-center'
                href={`posts/${path}`}
              >
                <Image
                  className='w-full rounded-t-md'
                  src={`/images/posts/${path}.png`}
                  alt='post-image'
                  width={500}
                  height={250}
                />
                <div className='mt-4 pr-3 self-end'>{date}</div>
                <div className={`my-2 ${gothic800.className} text-md`}>
                  {title}
                </div>
                <div>{description}</div>
                <div className='mt-2 mb-4 px-1 border border-transparent rounded-md bg-emerald-100'>
                  {category}
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Featuredposts;

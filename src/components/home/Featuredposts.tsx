import React from 'react';
import posts from '../../../data/posts.json';
import Link from 'next/link';
import Image from 'next/image';

function Featuredposts() {
  const featuredPosts = posts.filter((post) => post.featured);
  return (
    <>
      <h2>Featured Posts</h2>
      <ul>
        {featuredPosts.map(
          ({ title, description, category, date, path }, index) => (
            <Link href={`posts/${path}`} key={index}>
              <Image
                src={`/images/posts/${path}.png`}
                alt='post-image'
                width={250}
                height={250}
              />
              <div>{date}</div>
              <div>{title}</div>
              <div>{description}</div>
              <div>{category}</div>
            </Link>
          )
        )}
      </ul>
    </>
  );
}

export default Featuredposts;

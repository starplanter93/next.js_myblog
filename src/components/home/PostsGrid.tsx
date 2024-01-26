import Image from 'next/image';
import Link from 'next/link';
import posts from '../../../data/posts.json';

export default function PostsGrid() {
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <ul className='grid grid-cols-3 gap-7 my-4'>
      {featuredPosts.map(
        ({ title, description, category, date, path }, index) => (
          <li
            className='bg-white border border-solid border-inherit rounded-md shadow-md hover:shadow-lg'
            key={index}
          >
            <Link className='flex flex-col items-center' href={`posts/${path}`}>
              <Image
                className='w-full rounded-t-md'
                src={`/images/posts/${path}.png`}
                alt='post-image'
                width={500}
                height={250}
              />
              <div className='mt-4 pr-3 self-end'>{date}</div>
              <div className={`my-2 font-bold text-md`}>{title}</div>
              <div>{description}</div>
              <div className='mt-2 mb-4 px-1 border border-transparent rounded-md bg-emerald-100'>
                {category}
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

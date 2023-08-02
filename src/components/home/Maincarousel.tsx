'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import posts from '../../../data/posts.json';
import Link from 'next/link';
import Image from 'next/image';
import { Nanum_Gothic } from 'next/font/google';

const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

function MainCarousel() {
  const unfeaturedPosts = posts.filter((post) => !post.featured);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      //centermode일때에는 items의 수를 조절하는 것으로 item간 간격을 조절할 수 있음
      items: 4,
      // partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='w-full mb-8'>
      <h2 className={`${gothic800.className} text-lg my-4`}>You May Like</h2>
      <Carousel
        className='w-full'
        // partialVisible={true}
        responsive={responsive}
        infinite
        arrows
        centerMode={true}
        autoPlay
        autoPlaySpeed={3000}
      >
        {unfeaturedPosts.map(
          ({ title, description, category, date, path }, index) => (
            <div
              className='w-11/12 bg-white border border-solid border-inherit rounded-md shadow-md hover:shadow-lg'
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
                  width={400}
                  height={400}
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
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default MainCarousel;

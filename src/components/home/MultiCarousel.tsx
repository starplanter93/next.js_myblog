'use client';
import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Ownprops {
  children: ReactNode;
}

export default function MultiCarousel({ children }: Ownprops) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      //centermode일때에는 items의 수를 조절하는 것으로 item간 간격을 조절할 수 있음
      items: 4,
      // partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      itemClass='m-2'
      // partialVisible={true}
      responsive={responsive}
      infinite
      autoPlay
    >
      {children}
    </Carousel>
  );
}

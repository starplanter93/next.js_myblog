'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import mainProfile from '../../../public/images/main_profile.png';
import { Nanum_Gothic } from 'next/font/google';

const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });
const gothic700 = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

function Myprofile() {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center'>
      <Image
        className='rounded-full my-2'
        src={mainProfile}
        alt='mainProfile'
        height={250}
        width={250}
      />
      <h1 className={`${gothic800.className} text-2xl my-0.5`}>
        Hi, I&apos;m Kyusik
      </h1>
      <h3 className={`${gothic700.className} text-xl my-0.5`}>
        Frontend engineer
      </h3>
      <div>프론트엔드 개발자 정규식입니다.</div>
      <button
        className={`${gothic800.className} text-black bg-amber-500 rounded-lg my-2 px-2 py-0.5`}
        onClick={() => {
          router.push('/contact');
        }}
      >
        Contact Me
      </button>
    </div>
  );
}

export default Myprofile;

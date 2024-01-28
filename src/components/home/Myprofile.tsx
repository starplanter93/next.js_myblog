'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import mainProfile from '../../../public/images/main_profile.png';

export default function Myprofile() {
  const router = useRouter();
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={mainProfile}
        alt='main-profile'
        height={250}
        width={250}
        priority
      />
      <h2 className={'text-3xl font-bold mt-2'}>{"Hi, I'm Kyusik"}</h2>
      <h3 className={' text-xl font-semibold'}>Frontend Engineer</h3>
      <p>프론트엔드 개발자 정규식입니다.</p>
      <button
        className={'font-bold bg-yellow-500 rounded-xl mt-2 px-4 py-1'}
        onClick={() => {
          router.push('/contact');
        }}
      >
        Contact Me
      </button>
    </section>
  );
}

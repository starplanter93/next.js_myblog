'use client';
import React from 'react';
import Image from 'next/image';
import mainProfile from '../../../../public/images/main_profile.png';

function Myprofile() {
  return (
    <>
      <Image src={mainProfile} alt='mainProfile' height={250} width={250} />
      <h1>Hi, I&apos;m Kyusik</h1>
      <h3>Frontend engineer</h3>
      <div>프론트엔드 개발자 정규식입니다.</div>
    </>
  );
}

export default Myprofile;

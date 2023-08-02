import React from 'react';
import { Nanum_Gothic } from 'next/font/google';

const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

function Aboutme() {
  return (
    <div className='my-8 flex flex-col justify-center place-self-center w-11/12 h-full bg-slate-300 p-8 rounded-lg'>
      <h2 className={`flex justify-center mb-2 ${gothic800.className}`}>
        Who am I?
      </h2>
      <div className='flex justify-center mb-8'>프론트엔드 개발자 정규식</div>
      <h2 className={`flex justify-center mb-2 ${gothic800.className}`}>
        Career
      </h2>
      <div className='flex justify-center mb-8'>-</div>
      <h2 className={`flex justify-center mb-4 ${gothic800.className}`}>
        Skills
      </h2>
      <div className='flex justify-center mb-8'>React, Git, Typescript</div>
    </div>
  );
}

export default Aboutme;

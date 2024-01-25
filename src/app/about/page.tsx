import Aboutme from '@/components/about/Aboutme';
import Myprofile from '@/components/home/Myprofile';
import React from 'react';

export default function AboutPage() {
  return (
    <div className='flex flex-col h-screen'>
      <Myprofile />
      <Aboutme />
    </div>
  );
}

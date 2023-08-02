import Aboutme from '@/components/about/Aboutme';
import Myprofile from '@/components/home/Myprofile';
import React from 'react';

function about() {
  return (
    <div className='flex flex-col h-screen'>
      <Myprofile />
      <Aboutme />
    </div>
  );
}

export default about;

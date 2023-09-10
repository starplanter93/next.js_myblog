import Postaside from '@/components/posts/Postaside';
import Postbody from '@/components/posts/Postbody';
import React from 'react';

function posts() {
  return (
    <div className='flex'>
      <Postbody />
      <Postaside />
    </div>
  );
}

export default posts;

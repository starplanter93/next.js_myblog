import Image from 'next/image';
import Myprofile from '../components/home/Myprofile';
import Featuredposts from '@/components/home/Featuredposts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Myprofile />
      <Featuredposts />
    </main>
  );
}

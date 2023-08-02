import Image from 'next/image';
import Myprofile from '../components/home/Myprofile';
import Featuredposts from '../components/home/Featuredposts';
import Maincarousel from '../components/home/Maincarousel';

export default function Home() {
  return (
    <main className='h-full flex min-h-screen flex-col items-center justify-between'>
      <Myprofile />
      <Featuredposts />
      <Maincarousel />
    </main>
  );
}

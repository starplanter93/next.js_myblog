import Myprofile from '../components/home/Myprofile';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import Maincarousel from '../components/home/Maincarousel';

export default function HomePage() {
  return (
    <main className='h-full flex min-h-screen flex-col items-center justify-between'>
      <Myprofile />
      <FeaturedPosts />
      <Maincarousel />
    </main>
  );
}

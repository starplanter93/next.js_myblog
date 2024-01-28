import Myprofile from '../components/home/Myprofile';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import Maincarousel from '../components/home/Maincarousel';

export default function HomePage() {
  return (
    <>
      <Myprofile />
      <FeaturedPosts />
      <Maincarousel />
    </>
  );
}

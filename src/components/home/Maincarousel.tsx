import { getNonFeaturedPosts } from '@/api/posts';
import PostCard from '../PostCard';
import MultiCarousel from './MultiCarousel';

export default async function MainCarousel() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
}

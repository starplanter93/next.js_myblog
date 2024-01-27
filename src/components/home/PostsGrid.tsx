import { Post } from '@/types/types';
import PostCard from '../PostCard';

interface Ownprops {
  posts: Post[];
}

export default function PostsGrid({ posts }: Ownprops) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

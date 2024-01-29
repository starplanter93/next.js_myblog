import { getAllPosts } from '@/api/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

import { getPostData } from '@/api/posts';

interface Ownprops {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: Ownprops) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}

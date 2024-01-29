import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkDownViewer from './MarkdownViewer';
import { PostData } from '@/types/types';

interface Ownprops {
  post: PostData;
}

export default function PostContent({ post }: Ownprops) {
  const { category, content, date, description, featured, path, title } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end text-sky-600'>
        <AiTwotoneCalendar />
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <div className='w-44 border-2 border-sky-600 mt-4 mb-8' />
      <MarkDownViewer content={content} />
    </section>
  );
}

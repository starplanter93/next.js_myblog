import Aboutme from '@/components/about/Aboutme';
import Myprofile from '@/components/Myprofile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: '규식의 커리어 소개'
};

export default function AboutPage() {
  return (
    <>
      <Myprofile />
      <Aboutme />
    </>
  );
}

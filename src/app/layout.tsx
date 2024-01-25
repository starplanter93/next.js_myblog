import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kyusik`s Blog',
  description: 'Frontend developer Kyusik`s Blog'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const gothic800 = Nanum_Gothic({ weight: '800', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kyusik`s Blog',
  description: 'Frontend developer Kyusik`s Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} mx-12`}>
        <header className='flex justify-between my-5'>
          <Link className={`${gothic800.className} text-2xl`} href='/'>
            Kyusik`s Blog
          </Link>
          <nav className='flex items-center'>
            <Link className='mx-1' href='/'>
              Home
            </Link>
            <Link className='mx-1' href='/about'>
              About
            </Link>
            <Link className='mx-1' href='/posts'>
              Posts
            </Link>
            <Link className='mx-1' href='/contact'>
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className='flex justify-center bg-slate-900 text-white'>
          All Right Reserved.
        </footer>
      </body>
    </html>
  );
}

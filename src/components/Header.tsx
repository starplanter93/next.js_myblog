import { Nanum_Gothic } from 'next/font/google';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link className='text-3xl font-bold' href='/'>
        {"Kyusik's Blog"}
      </Link>
      <nav className='flex gap-4'>
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
  );
}

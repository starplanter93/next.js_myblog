import ContactForm from '@/components/contact/ContactForm';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiVelog } from 'react-icons/si';

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/starplanter93' },
  { icon: <SiVelog />, url: 'https://velog.io/@starplanter/posts' },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/kyusik-jeong-52183a25a/'
  }
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>starplanter@naver.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

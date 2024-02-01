'use client';
import { INIT_FORM } from '@/constant/constant';
import { Form } from '@/types/types';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState<Form>(INIT_FORM);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='from'>Your Email</label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

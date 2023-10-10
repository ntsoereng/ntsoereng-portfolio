'use client';

import { ValidationError, useForm } from '@formspree/react';
import { BiPaperPlane } from 'react-icons/bi';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnqlykrw');

  if (state.succeeded) {
    return (
      <section className="rounded-lg p-8 dark:bg-gray-900 bg-slate-100 border dark:border-slate-500 border-slate-300">
        <p className="text-base tracking-wider">
          Thanks for your message. I&apos;ll get back to you real soon!
        </p>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-md sm:w-fit w-full">
      <h4 className="tracking-wider text-lg mb-8">Send me a message</h4>
      <div>
        <div className="mb-8">
          <label htmlFor="email" className="sr-only">
            Your email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            aria-required
            className="valid:bg-none w-full focus:border-b-2 focus:outline-none focus:border-firstColor dark:focus:border-firstColor px-2 py-1 border-b dark:border-slate-500 border-slate-400 bg-white dark:bg-darkColor"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="sr-only">
            Your message...
          </label>
          <textarea
            autoComplete="off"
            required
            aria-required
            rows={5}
            placeholder="Your message..."
            name="message"
            id="message"
            className="w-full focus:border-b-2 focus:outline-none focus:border-firstColor dark:focus:border-firstColor px-2 py-1 border-b dark:border-slate-500 border-slate-400 bg-white dark:bg-darkColor"></textarea>
        </div>
        <div className="mb-4 flex items-center justify-center">
          <button
            disabled={state.submitting}
            type="submit"
            className="flex items-center justify-center dark:bg-darkColorAlt bg-slate-500 dark:hover:bg-firstColor hover:bg-firstColor text-white px-4 py-2 w-full rounded-md duration-300">
            Send Message &nbsp; <BiPaperPlane />
          </button>
        </div>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks } from '@/lib/navlinks';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Navbar() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <header className="header shadow-lg h-[calc(var(--header-height)+1rem)] w-full fixed top-0 left-0 py-0 px-6 lg:py-2 z-fixed flex justify-between items-center dark:bg-darkColor/70 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center lg:hidden">
        <div className="w-8 h-8 mr-2 mb-0 items-center flex justify-center pt-1 bg-firstColor rounded-[50%] overflow-hidden">
          <Image
            src="/img/cletus-1.png"
            alt="Picture of Cletus Ntsoereng"
            width={50}
            height={50}
            className="w-7 h-7"
          />
        </div>

        <div className="self-center">
          <Link
            href="/"
            className="block dark:text-whiteColor text-slate-800 font-semibold tracking-wider">
            Cletus Ntsoereng
          </Link>
        </div>
      </div>

      {/* Open Menu */}
      <svg
        onClick={toggleNav}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-slate-900 dark:text-white cursor-pointer lg:hidden">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>

      <nav
        className={`nav transition-all lg:w-full max-lg:fixed max-lg:top-0 max-lg:py-2 lg:py-2 ${
          isNavOpen ? 'max-lg:left-0' : 'max-lg:-left-full'
        } max-lg:dark:bg-darkColor max-lg:bg-white max-lg:text-whiteColor max-lg:w-full max-lg:h-screen max-lg:py-6 max-lg:px-0 max-lg:z-fixed max-lg:transition-all`}
        id="nav-menu">
        <div className="transition-all lg:mx-auto lg:grid-cols-[repeat(3,max-content)] lg:grid-rows-[1fr] lg:gap-x-4 lg:justify-between lg:items-center h-full grid-rows-[max-content_max-content_max-content] gap-y-16 max-w-5xl grid grid-cols-[100%] mx-6">
          {/* Close Nav Menu */}
          <svg
            onClick={toggleNav}
            className="lg:hidden absolute right-6 cursor-pointer font-semibold dark:text-slate-400 text-slate-700 rounded-full dark:bg-darkColorAlt bg-slate-300 hover:bg-gray-500 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            />
          </svg>

          <div className="lg:flex lg:items-center">
            <div className="lg:w-8 lg:h-8 lg:mr-2 lg:mb-0 lg:items-center flex justify-center pt-1 mb-[0.8rem] w-14 h-14 bg-firstColor rounded-[50%] overflow-hidden">
              <Image
                src="/img/cletus-2.png"
                alt="Picture of Cletus Ntsoereng"
                width={50}
                height={50}
                className="lg:w-7 lg:h-7"
              />
            </div>

            <div className="self-center">
              <Link
                href="/"
                className="block text-slate-900 dark:text-whiteColor font-semibold text-base tracking-wider">
                Cletus Ntsoereng
              </Link>
              <span className="text-sm text-slate-500 dark:text-slate-400 lg:hidden">
                Software Developer
              </span>
            </div>
          </div>

          <div className="text-slate-700">
            <ul className="lg:flex">
              {navLinks.map(navLink => {
                const isActive = pathname === navLink.slug;

                return (
                  <li
                    className="lg:my-0 lg:mx-1 my-6 mx-0 font-semibold"
                    key={navLink.slug}>
                    <Link
                      href={navLink.slug}
                      onClick={toggleNav}
                      className={
                        isActive
                          ? 'lg:py-3 lg:px-4 px-4 py-3 bg-firstColor text-white rounded'
                          : 'lg:py-3 lg:px-4 px-4 py-3 hover:bg-firstColor hover:text-white text-slate-600 dark:text-whiteColor rounded'
                      }>
                      {navLink.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="self-end flex lg:items-center">
            <a
              title="Shoot me a text on WhatsApp"
              href="https://wa.me/26662001918"
              className=" text-lg dark:text-whiteColor text-slate-700 mr-4 hover:text-firstColor dark:hover:text-firstColor">
              <span className="sr-only">Contact me on WhatsApp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                />
              </svg>
            </a>
            <a
              title="Give me a call"
              href="tel:+26657540890"
              className=" text-lg dark:text-whiteColor text-slate-700 mr-4 hover:text-firstColor dark:hover:text-firstColor">
              <span className="sr-only">Call Me on my Cellphone</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

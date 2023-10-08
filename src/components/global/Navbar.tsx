'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
// import { getPages } from '@/sanity/utils/sanity.query';
import { navLinks } from '@/lib/navlinks';

export default function Navbar() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const pathname = usePathname();

  // const pages = await getPages();

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
              title="LinkedIn Profile"
              href="https://linkedin.com/in/ntsoereng"
              className=" text-lg dark:text-whiteColor text-slate-700 mr-4 hover:text-firstColor">
              <span className="sr-only">LinkedIn Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <circle cx="4.983" cy="5.009" r="2.188" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
            </a>
            <a
              title="Github Profile"
              href="https://github.com/ntsoereng"
              className=" text-lg dark:text-whiteColor text-slate-700 mr-4 hover:text-firstColor">
              <span className="sr-only">Github Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

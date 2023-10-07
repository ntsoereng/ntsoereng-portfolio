'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="z-[9999] flex gap-1 fixed bottom-4 left-4 cursor-pointer p-1 shadow-xl rounded-full dark:bg-slate-700 bg-slate-600">
      <span
        className={`p-1 rounded-[50%] ${
          theme === 'light' ? 'bg-white' : 'bg-none'
        }`}>
        <span className="sr-only">Light Mode</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            theme === 'light' ? 'text-firstColor shadow-xl' : 'text-slate-400'
          }`}
          fill="currentColor">
          <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
        </svg>
      </span>

      <span
        className={`p-1 rounded-[50%] ${
          theme === 'light' ? 'bg-none' : 'bg-white'
        }`}>
        <span className="sr-only">Dark Mode</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            theme === 'light' ? 'text-slate-400' : 'text-firstColor shadow-xl'
          }`}
          fill="currentColor">
          <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" />
        </svg>
      </span>
    </div>
  );
};

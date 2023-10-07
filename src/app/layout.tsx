import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cletus Ntsoereng - Web Developer',
  description: 'I am a fullstack web developer based in Maseru, Lesotho.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-600 dark:text-slate-400`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

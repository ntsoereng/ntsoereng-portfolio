import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cletus Ntsoereng - Web Developer & Digital Explorer',
  description: 'I am a fullstack web developer and data analyst based in Maseru, Lesotho.',
  openGraph: {
    images: "/img/cletus-1.png",
  },

};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-600 dark:text-slate-400 selection:bg-fuchsia-600 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}

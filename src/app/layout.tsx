import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/__molecules/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='w-full flex flex-col items-center  '>
        <>
          <Header />
        </>
        {children}
      </body>
    </html>
  );
}

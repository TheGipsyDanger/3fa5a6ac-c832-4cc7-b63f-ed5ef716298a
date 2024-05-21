import type {Metadata} from 'next';
import {Mulish} from 'next/font/google';
import './globals.css';
import {App} from '@/components/App';

const mulish = Mulish({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}

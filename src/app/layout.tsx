
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Reusables/Footer';
import GoToTop from '@/components/Reusables/GoToTop';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import ContextProvider from '@/context';
import { headers } from 'next/headers' // added
import StickyVault  from '@/components/Reusables/StickyVault';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Photonics Gold',
  description: 'Photonics Gold',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get('cookie')

  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvider cookies={cookies}>
        <StickyVault />
        <ConditionalNavbar />
        <main>{children}</main>
        <GoToTop />
        <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

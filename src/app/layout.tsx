
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import GoToTop from '@/components/GoToTop';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import ContextProvider from '@/context';
import { headers } from 'next/headers' // added


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CreditCapital',
  description: 'Powered by WalletConnect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get('cookie')
  // Determine if the current path is part of the dashboard

  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvider cookies={cookies}>
          {/* Use the ConditionalNavbar to handle client-side logic */}
          <ConditionalNavbar />
          <main>{children}</main>
          <GoToTop />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

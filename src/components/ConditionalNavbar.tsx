'use client';

import Navbar from '@/components/Navbar';
import DashboardNavbar from '@/components/DashboardNavbar';
import { usePathname } from 'next/navigation';

const ConditionalNavbar = () => {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
    </>
  );
};

export default ConditionalNavbar;

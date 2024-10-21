'use client';

import Navbar from '@/components/Reusables/Navbar';
import DashboardNavbar from '@/components/DashboardComponents/DashboardNavbar';
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

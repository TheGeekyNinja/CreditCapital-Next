"use client";
import Home from '@/components/Home/Home';
import { useEffect, useState } from 'react';
import { useAppKitAccount } from "@reown/appkit/react";
import { useRouter, usePathname } from 'next/navigation';

const Page = () => {
  const { address, isConnected } = useAppKitAccount();
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    const hasRedirected = sessionStorage.getItem("hasRedirected");

    if (isConnected && pathname === "/" && !hasRedirected) {
      router.push(`/dashboard/${address}`);
      sessionStorage.setItem("hasRedirected", "true");
    }

  }, [address, isConnected, router, pathname, initialRender]);

  return (
    <>
      <Home />
    </>
  );
};

export default Page;


"use client";
import Home from '@/components/Home';
import { useEffect } from 'react';
import { useAppKitAccount } from "@reown/appkit/react";
import { useRouter } from 'next/navigation'; // Updated to next/navigation


const Page = () => {
  const { address, isConnected } = useAppKitAccount(); // Get the connected address
  const router = useRouter(); // Get the router instance
  useEffect(() => {
    console.log("Component mounted");
    console.log("isConnected:", isConnected);
  
    if (isConnected) {
      console.log("User is connected, redirecting...");
      router.push(`/dashboard/${address}`);
    }
  }, [address, router, isConnected]);
  return (
    <>
      <Home />
    </>
  );
};

export default Page;

"use client";

import { useState } from "react";
import Image from "next/image"; // For optimized image loading in Next.js
import { ConnectButton } from "./ConnectButton";
import Link from "next/link";
import { useAppKitAccount } from "@reown/appkit/react";

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { address, isConnected } = useAppKitAccount();
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <div className="p-5 absolute w-full text-white">
      {/* Desktop mode */}
      <div className="justify-between items-center max-w-[100rem] mx-auto flex">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/logo.png"
              className="xl:mr-10"
              alt="Logo"
              width={48}
              height={50}
            />
          </Link>

          <Link href="#about">About</Link>
          <Link href="#benefits">Benefits</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <div className="items-center gap-3 flex">
          <div className="py-2 px-4 rounded-full w-fit text-[#003366] text-xs sm:text-base">
            <w3m-button label="Login to start" />
          </div>
          {isConnected && (
            <Link href={`/dashboard/${address}`} className="px-4 py-2 text-white">
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Mobile mode */}
      <div className="justify-between items-center max-w-[100rem] mx-auto md:hidden flex">
        <Image
          src="/logo.png"
          className="mr-10"
          alt="Logo"
          width={50}
          height={25}
        />
        <svg
          className="h-8 w-8 text-white cursor-pointer"
          onClick={toggleSidebar}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Sidebar for mobile */}
      {sidebarIsOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={toggleSidebar}
            className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-10"
          ></div>

          {/* Sidebar Content */}
          <div className="fixed right-0 top-0 bottom-0 w-72 z-20 bg-[#003366] p-5">
            <div className="flex flex-col items-center gap-3">
              <a href="#about" className="font-bold">
                About
              </a>
              <a href="#contact" className="font-bold">
                Contact
              </a>
              <a href="#faq" className="font-bold">
                FAQ
              </a>
              <br />
              <ConnectButton />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

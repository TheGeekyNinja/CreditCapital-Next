"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppKitAccount } from "@reown/appkit/react";

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { address, isConnected } = useAppKitAccount();
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <div className="p-5 absolute w-full text-white">
      {/* Desktop mode */}
      <div className="hidden md:flex justify-between items-center max-w-[100rem] mx-auto">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/gold_flaticon.png"
              className="xl:mr-10 mb-5"
              alt="Logo"
              width={48}
              height={50}
            />
          </Link>

          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#benefits" className="hover:text-gray-300">
            Benefits
          </Link>
          <Link href="#faq" className="hover:text-gray-300">
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <w3m-button label="Login to Start" />

          {isConnected && (
            <Link
              href={`/dashboard/${address}`}
              className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Mobile mode */}
      <div className="flex justify-between items-center max-w-[100rem] mx-auto md:hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            className="mr-10"
            alt="Logo"
            width={50}
            height={25}
          />
        </Link>
        <button
          aria-label="Toggle navigation menu"
          className="h-8 w-8 text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
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
        </button>
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
            <button
              aria-label="Close sidebar"
              className="mb-5 self-end text-white"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-5">
              <Link
                href="#about"
                className="font-bold text-white"
                onClick={toggleSidebar}
              >
                About
              </Link>
              <Link
                href="#benefits"
                className="font-bold text-white"
                onClick={toggleSidebar}
              >
                Benefits
              </Link>
              <Link
                href="#faq"
                className="font-bold text-white"
                onClick={toggleSidebar}
              >
                FAQ
              </Link>
              <w3m-button label="Login to Start" />
              {isConnected && (
                <Link
                  href={`/dashboard/${address}`}
                  className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

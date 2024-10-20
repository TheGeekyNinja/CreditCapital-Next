'use client';
import { useEffect, useState } from 'react';
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'; // Import the icon

const GoToTop = () => {
  // State to track visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Effect to listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={goToTop}
      id="goToTopButton"
      className={`cursor-pointer opacity-0 fixed bottom-5 right-5 text-white bg-[#004891] hover:bg-[#005dbb] duration-100 shadow-md rounded-full p-3 ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
      <ArrowSmallUpIcon className="h-5 w-5" />
    </div>
  );
};

export default GoToTop;

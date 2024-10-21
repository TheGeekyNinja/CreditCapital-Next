"use client";
import { useEffect, useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={goToTop}
      id="goToTopButton"
      className={`cursor-pointer opacity-0 fixed bottom-5 right-5 text-white bg-[#004891] hover:bg-[#005dbb] duration-100 shadow-md rounded-full p-3 ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      <ArrowSmallUpIcon className="h-5 w-5" />
    </div>
  );
};

export default GoToTop;

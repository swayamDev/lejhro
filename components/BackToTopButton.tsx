"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="focus:ring-opacity-50 fixed right-5 bottom-5 z-50 flex size-10 items-center justify-center rounded-full bg-[#f4f4f4] text-[#2c7fbf] shadow-md shadow-[#3a3632] transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-[#2c7fbf] hover:shadow-lg focus:ring-2 focus:ring-[#2c7fbf] focus:outline-none"
      aria-label="Back to top"
    >
      <FaChevronUp size={22} />
    </button>
  );
};

export default BackToTopButton;

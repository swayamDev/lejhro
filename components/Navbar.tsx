"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/lejhro_logo_blue.png";
import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { Menu } from "./Menu";
import Link from "next/link";

export default function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowSticky(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showSticky) return null;

  return (
    <>
      <nav
        className="xy:px-16 fixed top-0 right-0 left-0 z-40 bg-[#fdfdfd] px-6 drop-shadow-sm drop-shadow-[#3a3632] transition-all duration-300 sm:px-6 md:px-16 lg:px-24 xl:px-24 2xl:px-32"
        aria-label="Sticky Navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between py-2.5">
          <Link href="https://www.lejhro.com/" aria-label="Go to Lejhro Home">
            <Image
              src={logo}
              alt="Lejhro Company Logo"
              width={215}
              height={30}
              priority
              className="w-[143px] sm:w-[215px]"
            />
          </Link>

          <div className="flex items-center">
            <Link
              href="https://www.lejhro.com/contact-us"
              className="hidden items-center px-3 py-2 font-bold text-[#2c7fbf] transition-colors hover:text-[#1f5f8a] sm:flex"
              aria-label="Go to Contact Us page"
            >
              Let's Talk
              <MdArrowRightAlt size={20} className="ml-1" aria-hidden="true" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="ml-4 flex size-10 items-center justify-center rounded-full bg-[#3a3632] text-white transition-transform hover:scale-105 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none sm:ml-6 md:ml-8 lg:ml-12"
              aria-label="Open Menu"
            >
              <RiMenu3Fill className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo2 from "../public/lejhro_logo_blue.png";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } h-full w-[380px] bg-white shadow-lg max-[380px]:w-full`}
      >
        <div>
          <div className="flex items-center justify-end gap-18 px-6 py-3.5 max-[336px]:gap-12 md:gap-12">
            <Link href="https://www.lejhro.com/" aria-label="Go to Lejhro Home">
              <Image
                src={logo2}
                alt="Lejhro Company Logo"
                width={215}
                height={30}
                className="w-[170px] max-[380px]:w-[150px] sm:w-[215px]"
              />
            </Link>
            <button
              onClick={onClose}
              className="group flex size-9 items-center justify-center rounded-full border-2 border-[#3a3632] text-[#3a3632] transition-all duration-200 hover:bg-[#3a3632] hover:text-white"
              aria-label="Close Menu"
            >
              <FiX className="text-xl" />
            </button>
          </div>
          <div className="h-px w-full bg-gray-300" />
        </div>

        <nav className="flex flex-col gap-6 px-8.5 py-4.5 text-xl font-bold text-[#3a3632] max-[992px]:px-14">
          <a
            href="https://www.lejhro.com/innovations"
            className="hover:text-[#2c7fbf]"
          >
            Innovations
          </a>
          <a
            href="https://www.bootcamp.lejhro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2c7fbf]"
          >
            Bootcamp
          </a>
          <a
            href="https://www.lejhro.com/business-services"
            className="hover:text-[#2c7fbf]"
          >
            Business Services
          </a>
          <a
            href="https://www.lejhro.com/financial-services"
            className="hover:text-[#2c7fbf]"
          >
            Financial Services
          </a>
          <a
            href="https://www.lejhro.com/about"
            className="hover:text-[#2c7fbf]"
          >
            About
          </a>
          <a
            href="https://www.lejhro.com/contact-us"
            className="hover:text-[#2c7fbf]"
          >
            Contact Us
          </a>
          <a
            href="https://www.lejhro.com/blogs"
            className="hover:text-[#2c7fbf]"
          >
            Blogs
          </a>
        </nav>

        <div className="mt-1 flex items-center gap-6 px-9 text-2xl text-[#3a3632] max-[992px]:px-14">
          <a
            href="https://x.com/lejhro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#2c7fbf]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/lejhro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#2c7fbf]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/lejhro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#2c7fbf]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#2c7fbf]"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
};

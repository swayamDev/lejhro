"use client";

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import logo1 from "../public/lejhro_logo_white.png";
import { Menu } from "./Menu";
import Link from "next/link";

const navLinks = [
  { href: "https://www.lejhro.com/innovations", label: "Innovations" },
  {
    href: "https://www.lejhro.com/business-services",
    label: "Business Services",
  },
  {
    href: "https://www.lejhro.com/financial-services",
    label: "Financial Services",
  },
  {
    href: "https://www.bootcamp.lejhro.com/",
    label: "Bootcamp",
    external: true,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="xy:px-16 xy:pt-12 xy:pb-12 bg-[#d6932c] px-6 py-6 sm:px-6 sm:py-10 md:px-16 md:py-14 lg:px-24 xl:px-24 2xl:px-32">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="https://www.lejhro.com/" aria-label="Go to Lejhro Home">
            <Image
              src={logo1}
              alt="Lejhro Company Logo"
              width={218}
              height={30}
              priority
              className="w-[145px] sm:w-[218px]"
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <nav
              aria-label="Main Navigation"
              className="xy:flex hidden items-center gap-6 text-white md:gap-8 lg:gap-12"
            >
              {navLinks.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-gray-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(true)}
              className="ml-4 flex size-10 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none sm:ml-6 md:ml-8 lg:ml-12"
              aria-label="Open Menu"
            >
              <RiMenu3Fill className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl sm:mt-32">
          <h2 className="text-3xl text-white sm:text-5xl">Blogs</h2>
        </div>
      </header>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

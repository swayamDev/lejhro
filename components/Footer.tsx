import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-8 border-[#2c7fbf] bg-gray-50 pt-6 pb-4 sm:pt-8 lg:pt-22">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-y-12 lg:mb-24">
            <div className="w-full min-[600px]:w-1/2 min-[992px]:w-1/4 min-[1200px]:w-1/4">
              <h3 className="mb-5 text-2xl font-extrabold text-[#3a3632]">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.lejhro.com/innovations"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Innovations
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/business-services"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Business Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/financial-services"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Financial services
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.recruit.lejhro.com/"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lejhro Recruiter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/about"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/blogs"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full min-[600px]:w-1/2 min-[992px]:w-1/4 min-[1200px]:w-1/4">
              <h3 className="mb-5 text-2xl font-extrabold text-[#3a3632]">
                Programs
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.bootcamp.lejhro.com/"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lejhro Bootcamp
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full min-[600px]:w-1/2 min-[992px]:w-1/4 min-[1200px]:w-1/4">
              <h3 className="mb-5 text-2xl font-extrabold text-[#3a3632]">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.lejhro.com/contact-us"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/terms-of-use"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lejhro.com/privacy-statement"
                    className="text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  >
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full min-[600px]:w-1/2 min-[1200px]:w-1/4">
              <h3 className="mb-5 text-2xl font-extrabold text-[#3a3632]">
                Connect with us
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://x.com/lejhro"
                  aria-label="Twitter"
                  className="text-2xl text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/lejhro"
                  aria-label="Facebook"
                  className="text-2xl text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/lejhro"
                  aria-label="LinkedIn"
                  className="text-2xl text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"
                  aria-label="YouTube"
                  className="text-2xl text-[#3a3632] transition-colors hover:text-[#2c7fbf]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#3a3632] md:text-base">
            © {new Date().getFullYear()} LEJHRO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

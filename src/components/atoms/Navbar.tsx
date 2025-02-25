"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { navLinks } from "@/const/links";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  if (!mounted) {
    return null;
  }
  return (
    <nav className="bg-white font-medium w-full fixed top-0 z-50 text-black py-4 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center w-full lg:w-auto">
          <div onClick={handleLinkClick}>
            <Logo />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="lg:hidden text-[24px] focus:outline-none ml-auto"
          >
            {isOpen ? (
              <AiOutlineClose className="text-red-600" />
            ) : (
              <VscMenu className="" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen
              ? "flex flex-col justify-start items-start  gap-5 px-4 h-screen py-6 "
              : "hidden"
          } lg:flex lg:flex-row lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:bg-transparent py-4 md:py-0`}
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="group"
                >
                  <div className="flex items-center">
                    <span className="py-2 px-3 cursor-pointer hover:text-red-600 transition duration-150 ease-in-out text-[#393939]">
                      {link.label}
                    </span>
                    <span className="cursor-pointer">
                      <MdArrowDropDown />
                    </span>
                  </div>
                  <div
                    className={`absolute left-0 mt- w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                      dropdownOpen ? "opacity-100 z-10 " : "opacity-0 invisible"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        className="block px-4 py-2 text-sm  hover:bg-gray-100"
                        onClick={handleLinkClick}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.url}
                  className={`py-2 px-3 hover:text-[#851711] transition duration-150 ease-in-out text-[#393939] ${
                    pathname === link.url
                      ? "underline text-[#851711] underline-offset-8"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div
            className="lg:hidden w-full px-2 text-center pb-10 mt-2"
            onClick={handleLinkClick}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfzjRKzW4FXap0_6RJjV4hN0UNYDtcZp5Ge2go97GdBHOs1ow/viewform?usp=header"
              target="blank"
              className="flex justify-center w-full items-center text-center px-4 text-[#DA251C] py-1 rounded-md border border-[#DA251C]"
            >
              Enroll Now &rarr;
            </a>
          </div>
        </div>

        <div className="hidden lg:flex">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzjRKzW4FXap0_6RJjV4hN0UNYDtcZp5Ge2go97GdBHOs1ow/viewform?usp=header"
            target="blank"
            className="flex items-center px-4 text-[#DA251C] py-1 rounded-md border border-[#DA251C] hover:bg-slate-100 hover:border-red-500 duration-150"
          >
            Enroll Now &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
};

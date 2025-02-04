"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { navLinks } from "@/const/links";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!mounted) {
    return null;
  }
  return (
    <nav
      className={`${
        isOpen ? "h-screen" : ""
      } bg-white   font-medium w-full fixed  top-0 z-50 text-black py-4 px-2 md:px-4 lg:px-0 shadow-md`}
    >
      <div className="max-w-6xl mx-auto  py-3 flex  gap-6  items-center justify-between">
        <div className="flex justify-between items-center w-full lg:w-auto ">
          <div onClick={handleLinkClick}>
            <Logo />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none"
            >
              <span className="text-3xl  cursor-pointer">
                {isOpen ? (
                  <AiOutlineClose className="text-red-600" />
                ) : (
                  <VscMenu className="text-gray-950 " />
                )}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex flex-col items-start px-1 gap-3 mt-4 " : "hidden"
          }  lg:flex lg:flex-row lg:space-x-6  absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:top-auto lg:bg-transparent py-4 md:py-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={` ${isOpen ? "" : ""} ${
                pathname === link.url ? "underline text-[#DA251C] " : ""
              } py-2 px-3 hover:text-red-600 transition duration-150 ease-in-out text-[#393939] hover:underline underline-offset-8`}
              onClick={handleLinkClick}
            >
              {link.label} {pathname === link.url ? "+" : ""}
            </Link>
          ))}
          <div className=" lg:hidden w-fit px-2 " onClick={handleLinkClick}>
            <button className=" flex items-center px-4 text-[#DA251C] py-1 rounded-md border border-[#DA251C]">
              Enrol Now &rarr;
            </button>
          </div>
        </div>
        <div className="hidden lg:flex  space-x-4">
          <button className=" flex items-center px-4 text-[#DA251C] py-1 rounded-md border border-[#DA251C]">
            Enrol Now &rarr;
          </button>
        </div>
      </div>
    </nav>
  );
};

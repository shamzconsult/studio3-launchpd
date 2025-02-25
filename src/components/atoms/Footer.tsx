"use client";
import { LinkedIn } from "../icons/LinkedIn";
import { Instagram } from "../icons/Instagram";
import { Logo } from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-20 md:mt-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center gap-8">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm ">
              Empowering learners with quality, accessible, and engaging
              educational resources.
            </p>
            <div className="flex gap-2 items-center mt-3 ">
              <a
                href="https://x.com/Studio3Launchpd"
                target="blank"
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <BsTwitterX className=" w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/company/studio3launchpad/"
                target="blank"
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <LinkedIn className=" w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/studio3launchpad/"
                target="blank"
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://www.youtube.com/@Studio3launchpad"
                target="blank"
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <FaYoutube className="w-3 h-3" />
              </a>
              <a
                href="https://www.tiktok.com/@studio3launchpad"
                target="blank"
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <FaTiktok className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">Company</h4>
            <ul className="space-y-5 ">
              <li>
                <a href="/about" className="hover:text-red-500">
                  About us
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-red-500">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">Courses</h4>
            <ul className="space-y-5 ">
              <li>Software Development</li>
              <li>Web3 Development</li>
              <li>Product Management</li>
              <li>Data Analytics</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">Resources</h4>
            <ul className="space-y-5 ">
              <li>
                <a href="/finance" className="hover:text-red-500">
                  Financial Aid
                </a>
              </li>
              <li>
                <a href="/partner" className="hover:text-red-500">
                  Partnership
                </a>
              </li>
              <li>Join as Tutor</li>
              <li>Services</li>
              <li>
                <a href="/contact" className="hover:text-red-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">FAQs</h4>
            <ul className="space-y-5 ">
              <li>
                <a href="/pricing" className="hover:text-red-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-red-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-red-500">
                  Getting Started
                </a>
              </li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>

        <div className="text-start  mt-12 border-t border-[#767676] pt-6 py-3">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
};

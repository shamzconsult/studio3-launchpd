"use client";
import { LinkedIn } from "../icons/LinkedIn";
import { Instagram } from "../icons/Instagram";
import { Logo } from "./Logo";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { courses } from "@/const/courses";
import { useState } from "react";

export const Footer = () => {
  const [course] = useState(courses);

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
                <Link href="/about" className="hover:text-red-500">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-500">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">Courses</h4>
            <div className="flex flex-col space-y-5">
              {course.map((course, index) => (
                <Link key={index} href={`/courses/${course.slug}`}>
                  {course.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">Resources</h4>
            <ul className="space-y-5 ">
              <li>
                <Link href="/finance" className="hover:text-red-500">
                  Financial Aid
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-red-500">
                  Partnership
                </Link>
              </li>
              <li>Join as Tutor</li>
              <li>Services</li>
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold  mb-4">FAQs</h4>
            <ul className="space-y-5 ">
              <li>
                <Link href="/pricing" className="hover:text-red-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-red-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-500">
                  Getting Started
                </Link>
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

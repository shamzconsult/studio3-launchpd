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
      <div className="max-w-6xl mx-auto px-6 py-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-32 ">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm max-w-sm">
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
          <section className="  flex flex-col md:flex-row justify-evenly gap-8 lg:gap-24">
            <div>
              <h4 className="font-semibold  mb-4">Company</h4>
              <ul className="space-y-5 ">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-red-500 text-nowrap"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-red-500 text-nowrap">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-red-500 text-nowrap"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold  mb-4">Courses</h4>
              <div className="flex flex-col space-y-5">
                {course.map((course, index) => (
                  <Link
                    className="hover:text-red-500 text-nowrap"
                    key={index}
                    href={`/courses/${course.slug}`}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold  mb-4">Resources</h4>
              <ul className="space-y-5 ">
                <li>
                  <Link
                    href="/finance"
                    className="hover:text-red-500 text-nowrap"
                  >
                    Financial Aid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner"
                    className="hover:text-red-500 text-nowrap"
                  >
                    Partnership
                  </Link>
                </li>
                <li>Join as Tutor</li>
                <li>Services</li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-red-500 text-nowrap"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold  mb-4">FAQs</h4>
              <ul className="space-y-5 ">
                <li>
                  <Link href="/faq" className="hover:text-red-500 text-nowrap">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-red-500 text-nowrap">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-red-500 text-nowrap">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-red-500 text-nowrap">
                    Technical Support
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="text-center  mt-12 border-t border-[#767676] pt-6 py-3">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
};

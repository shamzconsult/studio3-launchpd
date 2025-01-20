import Image from "next/image";
import { Facebook } from "../icons/Facebook";
import { LinkedIn } from "../icons/LinkedIn";
import { Instagram } from "../icons/Instagram";

export const Footer = () => {
  return (
    <footer className="mt-20 md:mt-32 bg-white">
      <div className="container mx-auto md:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="relative h-[39px] w-[166px]">
              <Image
                src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737361194/edutech/6_67_dvjnml.png"
                alt="logo"
                fill
              />
            </div>
            <div className="flex gap-4 items-center">
              <a
                href=""
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <Facebook className=" w-6 h-6" />
              </a>
              <a
                href=""
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <LinkedIn className=" w-6 h-6" />
              </a>
              <a
                href=""
                className="border border-[#393939] rounded-xl p-2 hover:border-red-600 duration-100 ease-in-out"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
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
                <a href="" className="hover:text-red-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="" className="hover:text-red-500">
                  Software Development
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Web3 Development
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Product Management
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="" className="hover:text-red-500">
                  Partnership
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Join as Tutor
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">FAQs</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="" className="hover:text-red-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="" className="hover:text-red-500">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-start text-gray-600 mt-12 border-t border-[#767676] pt-6 py-3">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
};

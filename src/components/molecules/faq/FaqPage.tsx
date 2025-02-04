"use client";

import FAQ from "@/components/atoms/FAQs";
import { Help } from "@/components/atoms/Help";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { faqData } from "@/const/faqs";

export const FaqPage = () => {
  return (
    <div>
      <section className="bg-[#FBE9E8] px-4 py-20 lg:mt-20">
        <div className="max-w-6xl mx-auto py-14">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Find answers to your questions quickly
          </h1>
          <p className="text-gray-600 mt-4 font-medium max-w-sm">
            Empowering learners and teachers alike. Discover the path to success
            with us!
          </p>
          <div className="mt-4">
            <div className="relative max-w-7xl ">
              <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                <SearchIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Type your questions here..."
                className="w-full lg:w-[80%] bg-inherit py-3 px-8 rounded border border-[#9D9D9D] shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
        </div>
      </section>
      <FAQ faqData={faqData} />
      <Help />
    </div>
  );
};

"use client";

import { FAQButtons, FAQItem } from "@/components/atoms/FAQButtons";
import { Help } from "@/components/atoms/Help";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { generalFAQ } from "@/const/faqs";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const FaqPage = () => {
  const [question, setQuestion] = useState<FAQItem[]>(generalFAQ);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const choice = (category: string) => {
    setQuestion(
      generalFAQ.filter((question) => {
        return question.category === category;
      })
    );
    setSearchTerm("");
  };

  const displayedFew = showAll ? question : question.slice(0, 5);

  const filteredData = displayedFew.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <section className="bg-[#FBE9E8] px-4 py-20 lg:mt-20 overflow-x-auto ">
        <div className="max-w-6xl mx-auto pt-14">
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl font-bold leading-tight">
            Find answers to your questions quickly
          </h1>
          <p className="text-[14px]  md:text-[16px] mt-4 font-medium max-w-sm">
            Got questions? Type them in and let us help you find the answers on
            your path to success!
          </p>
          <div className="mt-4">
            <div className="relative max-w-7xl ">
              <span className="absolute inset-y-0 left-2 flex items-center ">
                <SearchIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your questions here..."
                className="w-full lg:w-[80%] bg-inherit py-3 px-8 rounded border border-[#9D9D9D] shadow-sm focus:outline-none focus:ring-0 focus:ring-none focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        <FAQButtons choice={choice} />
        <div className="max-w-3xl mx-auto space-y-4 px-6 lg:mt-10">
          {filteredData.length > 0 ? (
            filteredData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 text-[#393939]"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold ">{faq.question}</span>
                  <span className="font-bold">
                    {expandedIndex === index ? (
                      <MdKeyboardArrowUp size={24} />
                    ) : (
                      <MdKeyboardArrowDown size={24} />
                    )}
                  </span>
                </button>
                {expandedIndex === index && (
                  <div className="pb-4 text-[14px]  max-w-2xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center  font-bold py-24">
              No results found for{" "}
              <span className="text-red-400"> &#34;{searchTerm}&#34; </span>
            </div>
          )}
        </div>

        {question.length > 5 && searchTerm === "" && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#DA251C] font-medium "
            >
              {showAll ? "See Less" : "See More"}
              <span className="ml-1">{showAll ? "-" : "+"}</span>
            </button>
          </div>
        )}
      </section>
      <Help />
    </div>
  );
};

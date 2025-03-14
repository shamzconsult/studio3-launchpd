"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQButtonsProps {
  choice: (category: string) => void;
  setQuestion: (faqs: FAQItem[]) => void;
  generalFAQ: FAQItem[];
}

export const FAQButtons = ({
  choice,
  setQuestion,
  generalFAQ,
}: FAQButtonsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleButtonClick = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setQuestion(generalFAQ);
    } else {
      choice(category);
    }
  };

  const buttonClasses = (category: string) =>
    `border border-[#747474] px-4  rounded-md py-2 duration-300 hover:border-[#DA251C] ${
      activeCategory === category ? "bg-[#DA251C] text-white border-none" : ""
    }`;
  return (
    <div
      className="mx-auto text-center max-w-6xl   font-medium mb-8 flex justify-center items-center gap-4 
      overflow-x-auto flex-nowrap whitespace-nowrap  scrollbar-thumb-white scrollbar-track-white px-2 py-2"
    >
      <button
        onClick={() => handleButtonClick("All")}
        className={buttonClasses("All")}
      >
        All
      </button>
      <button
        onClick={() => handleButtonClick("price")}
        className={buttonClasses("price")}
      >
        Pricing
      </button>
      <button
        onClick={() => handleButtonClick("course")}
        className={buttonClasses("course")}
      >
        Programs
      </button>
      <button
        onClick={() => handleButtonClick("started")}
        className={buttonClasses("started")}
      >
        Application
      </button>
      <button
        onClick={() => handleButtonClick("partner")}
        className={buttonClasses("partner")}
      >
        Partnership
      </button>
      <button
        onClick={() => handleButtonClick("career")}
        className={buttonClasses("career")}
      >
        Career
      </button>
      <button
        onClick={() => handleButtonClick("finance")}
        className={buttonClasses("finance")}
      >
        Support
      </button>
    </div>
  );
};

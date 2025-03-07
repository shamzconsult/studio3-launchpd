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
    `border border-[#747474] px-6 rounded-md py-2 duration-300 hover:border-[#DA251C] ${
      activeCategory === category ? "bg-[#DA251C] text-white border-none" : ""
    }`;
  return (
    <div
      className="mx-auto text-center font-medium mb-8 flex justify-center items-center gap-4 
      overflow-x-auto whitespace-nowrap flex-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-2 py-2"
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
        Course content
      </button>
      <button
        onClick={() => handleButtonClick("started")}
        className={buttonClasses("started")}
      >
        Getting started
      </button>
      <button
        onClick={() => handleButtonClick("finance")}
        className={buttonClasses("finance")}
      >
        Financial aid
      </button>
    </div>
  );
};

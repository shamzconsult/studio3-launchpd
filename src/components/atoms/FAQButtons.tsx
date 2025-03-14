"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQButtonsProps {
  choice: (category: string) => void;
}

export const FAQButtons = ({ choice }: FAQButtonsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("price");

  const handleButtonClick = (category: string) => {
    setActiveCategory(category);
    choice(category);
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

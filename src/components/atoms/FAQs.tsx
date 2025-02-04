import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ = ({ faqData }: { faqData: FAQItem[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 3);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 px-6">
        {displayedFAQs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 text-[#6A6A6A]">
            <button
              onClick={() => toggleExpand(index)}
              className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold ">{faq.question}</span>
              <span className="font-bold">
                {expandedIndex === index ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </span>
            </button>
            {expandedIndex === index && (
              <div className="pb-4  max-w-2xl">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#DA251C] font-medium "
        >
          {showAll ? "See Less" : "See More"}
          <span className="ml-1">{showAll ? "-" : "+"}</span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;

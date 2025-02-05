interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const getFAQQuestionsByCategory = (
  faqData: FAQItem[],
  category: string
): FAQItem[] => {
  return faqData.filter((faq) => faq.category === category);
};

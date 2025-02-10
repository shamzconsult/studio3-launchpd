"use client";

import FAQ from "@/components/atoms/FAQs";
import { Eligibility } from "./Eligibility";
import { FinanceHero } from "./FinanceHero";
import { ApplyFinance } from "@/components/atoms/ApplyFinance";
import { generalFAQ } from "@/const/faqs";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";

export const FinancePage = () => {
  const financeFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "finance");
  return (
    <div>
      <FinanceHero />
      <Eligibility />
      <FAQ faqData={financeFAQQuestions} />
      <ApplyFinance />
    </div>
  );
};

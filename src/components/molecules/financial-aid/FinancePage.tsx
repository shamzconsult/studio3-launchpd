"use client";

import FAQ from "@/components/atoms/FAQs";
import { Eligibility } from "./Eligibility";
import { FinanceHero } from "./FinanceHero";
import { ApplyFinance } from "@/components/atoms/ApplyFinance";
import { financeFAQ } from "@/const/faqs";

export const FinancePage = () => {
  return (
    <div>
      <FinanceHero />
      <Eligibility />
      <FAQ faqData={financeFAQ} />
      <ApplyFinance />
    </div>
  );
};

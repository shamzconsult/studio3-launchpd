"use client";

import { Carousel } from "@/components/atoms/Carousel";
import { Courses } from "../home/Courses";
import { PricingHeroSection } from "./PricingHeroSection";
import { partners } from "@/const/partners";
import FAQ from "@/components/atoms/FAQs";
import { Help } from "@/components/atoms/Help";
import { Testimonials } from "../home/Testimonials";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";
import { generalFAQ } from "@/const/faqs";

export const PricingPage = () => {
  const pricingFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "home");
  return (
    <div className="">
      <PricingHeroSection />
      <Courses title="Find the right Course for You" />
      <Testimonials />
      <Carousel
        header="Payment Options"
        subheader="Hey there! Want to level up? Join our EdTech crew today!"
        logos={partners}
      />
      <FAQ faqData={pricingFAQQuestions} />
      <Help />
    </div>
  );
};

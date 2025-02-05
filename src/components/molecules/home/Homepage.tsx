"use client";

import FAQ from "@/components/atoms/FAQs";
import { Benefit } from "./Benefit";
import { Courses } from "./Courses";
import { HomeHeroSection } from "./HomeHeroSection";
import { Testimonials } from "./Testimonials";
import { Help } from "@/components/atoms/Help";
import { Carousel } from "@/components/atoms/Carousel";
import { partners } from "@/const/partners";
import { generalFAQ } from "@/const/faqs";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";

export default function HomePage() {
  const homeFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "home");
  return (
    <div className="">
      <HomeHeroSection />
      <Benefit />
      <Courses title="Available Courses" />
      <Carousel title="Where our Alumnis work" logos={partners} />
      <Testimonials />
      <FAQ faqData={homeFAQQuestions} />
      <Help />
    </div>
  );
}

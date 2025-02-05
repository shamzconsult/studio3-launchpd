"use client";

import FAQ from "@/components/atoms/FAQs";
import { AboutHeroSection } from "./AboutHeroSection";
import { Approach } from "./Approach";
import { AvailableCourses } from "./AvailableCourses";
import { OurMission } from "./OurMission";
import { Tutors } from "./Tutors";
import { WhyUs } from "./WhyUs";
import { partners } from "@/const/partners";
import { Carousel } from "@/components/atoms/Carousel";
import { generalFAQ } from "@/const/faqs";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";

export const AboutPage = () => {
  const aboutFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "about");
  return (
    <div>
      <AboutHeroSection />
      <OurMission />
      <Approach />
      <AvailableCourses />
      <WhyUs />
      <Tutors />
      <FAQ faqData={aboutFAQQuestions} />
      <Carousel title="Our Partners" logos={partners} />
    </div>
  );
};

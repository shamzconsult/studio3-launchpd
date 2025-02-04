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
import { aboutFAQ } from "@/const/faqs";

export const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <OurMission />
      <Approach />
      <AvailableCourses />
      <WhyUs />
      <Tutors />
      <FAQ faqData={aboutFAQ} />
      <Carousel title="Our Partners" logos={partners} />
    </div>
  );
};

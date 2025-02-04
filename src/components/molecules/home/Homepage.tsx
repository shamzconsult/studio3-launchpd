"use client";

import FAQ from "@/components/atoms/FAQs";
import { Benefit } from "./Benefit";
import { Courses } from "./Courses";
import { HomeHeroSection } from "./HomeHeroSection";
import { Testimonials } from "./Testimonials";
import { Help } from "@/components/atoms/Help";
import { Carousel } from "@/components/atoms/Carousel";
import { partners } from "@/const/partners";
import { faqData } from "@/const/faqs";

export default function HomePage() {
  return (
    <div className="">
      <HomeHeroSection />
      <Benefit />
      <Courses title="Available Courses" />
      <Carousel title="Where our Alumnis work" logos={partners} />
      <Testimonials />
      <FAQ faqData={faqData} />
      <Help />
    </div>
  );
}

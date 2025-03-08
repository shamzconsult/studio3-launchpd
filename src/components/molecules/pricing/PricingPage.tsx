"use client";

import { Carousel } from "@/components/atoms/Carousel";
import { PricingHeroSection } from "./PricingHeroSection";
import { partners } from "@/const/partners";
import FAQ from "@/components/atoms/FAQs";
import { Help } from "@/components/atoms/Help";
import { Testimonials } from "../home/Testimonials";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";
import { generalFAQ } from "@/const/faqs";
import { CourseCard } from "@/components/atoms/CourseCard";
import { coursesPrice } from "@/const/courses";

export const PricingPage = () => {
  const pricingFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "price");
  return (
    <div className="">
      <PricingHeroSection />
      <section className="lg:py-20 px-4 ">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold">
            Find the right Course for You
          </h1>
          <p className="text-[14px] md:text-[16px] mt-2">
            Hey there! Want to level up? kickstart you tech career with Studio3
            Launchpad today!
          </p>
        </div>

        <CourseCard explorecourses={coursesPrice} />
      </section>
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

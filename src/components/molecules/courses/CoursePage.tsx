"use client";

import { Carousel } from "@/components/atoms/Carousel";
import { CourseHeroSection } from "./CourseHeroSection";
import { ExploreCourses } from "./ExploreCourses";
import { ProgramStructure } from "./ProgramStructure";
import { partners } from "@/const/partners";
import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { ApplyFinance } from "@/components/atoms/ApplyFinance";

export const CoursePage = () => {
  return (
    <div>
      <CourseHeroSection />
      <ExploreCourses />
      <ProgramStructure />
      <Carousel title="Where our Alumnis work" logos={partners} />
      <div className="py-20 px-4">
        <TestimonialCard title="Testimonials" />
      </div>
      <ApplyFinance />
    </div>
  );
};

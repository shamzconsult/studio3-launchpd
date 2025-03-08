"use client";

import { CourseCard } from "@/components/atoms/CourseCard";
import { courses } from "@/const/courses";

export const Courses = ({ title }: { title: string }) => {
  return (
    <>
      <section className="py-20 px-4 ">
        <div className="text-center mb-12">
          <h1 className="text-[20px] md:text-3xl font-bold"> {title}</h1>
          <p className="text-[16px] md:text-[18px] mt-2">
            Hello! Ready to advance? Join our cohort-based training programs
            now!
          </p>
        </div>

        <CourseCard explorecourses={courses} />
      </section>
    </>
  );
};

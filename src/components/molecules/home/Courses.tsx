"use client";

import { CourseCard } from "@/components/atoms/CourseCard";
import { courses } from "@/const/courses";

export const Courses = ({ title }: { title: string }) => {
  return (
    <>
      <section className="py-20 px-6 ">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold"> {title}</h1>
          <p className="text-xl mt-2">
            Hey there! Want to level up? Join our EdTech crew today!
          </p>
        </div>

        <CourseCard explorecourses={courses} />
      </section>
    </>
  );
};

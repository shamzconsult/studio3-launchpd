"use client";

import { CourseType } from "@/const/courses";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type ExploreCoursesProps = {
  explorecourses: CourseType[];
  header?: string;
};

export const CourseCard = ({
  explorecourses,
  header = "",
}: ExploreCoursesProps) => {
  const [showMore, setShowMore] = useState(false);

  const visibleCourses = showMore ? explorecourses : explorecourses.slice(0, 6);
  return (
    <div id="price">
      {header && (
        <h1 className="text-3xl font-bold text-left mb-10">{header}</h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleCourses.map((course, index) => (
          <Link
            href={`/courses/${course.slug}`}
            key={index}
            className="rounded-lg overflow-hidden border  border-[#d4d4d4] lg:w-[357px] hover:shadow-md"
          >
            <div className="relative lg:w-[357px] h-[201px]">
              <Image src={course.image} alt={course.title} fill />
            </div>
            <section className="flex flex-col flex-1  justify-evenly gap-3 items-start p-2">
              <div className="flex-1 w-full">
                <div className="flex justify-between font-semibold w-full pr-3 mb-1">
                  <h3>{course.title}</h3>
                  {course.price !== undefined && <h3>${course.price}</h3>}
                </div>
                <p className="text-[#747474] text-sm ">{course.description}</p>
              </div>
              <Link
                href={`/courses/${course.slug}`}
                className="text-[#DA251C]  hover:underline flex items-center group "
              >
                Learn More
                <MdOutlineKeyboardArrowRight className="px-1" size={28} />
              </Link>
            </section>
          </Link>
        ))}
      </div>

      {explorecourses.length > 6 && (
        <div className="text-center mt-12">
          <button
            className="text-[#DA251C]  hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More "}
            <span className="ml-1">{showMore ? "-" : "+"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

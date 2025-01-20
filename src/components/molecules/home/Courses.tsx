import { courses } from "@/const/courses";
import Image from "next/image";
import { useState } from "react";

export const Courses = ({ title }: { title: string }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleCourses = showMore ? courses : courses.slice(0, 6);
  return (
    <>
      <section className="py-20 px-6 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold"> {title}</h2>
          <p className="text-xl mt-2">
            Hey there! Want to level up? Join our EdTech crew today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleCourses.map((course, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-[#9D9D9D] lg:w-[357px]"
            >
              <div className="relative lg:w-[357px] h-[201px]">
                <Image src={course.image} alt={course.title} fill />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <h3 className="font-semibold mb-1">{course.price}</h3>
                </div>
                <p className="text-[#747474] text-sm mb-2">{course.duration}</p>
                <button className="text-[#DA251C] font-bold hover:underline">
                  Enrol Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="text-[#DA251C]  hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More "}
            <span className="ml-1">{showMore ? "-" : "+"}</span>
          </button>
        </div>
      </section>
    </>
  );
};

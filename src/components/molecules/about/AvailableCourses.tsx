import { availablecourses } from "@/const/courses";
import Link from "next/link";

export const AvailableCourses = () => {
  return (
    <section className="max-w-6xl mx-auto py-[28px] md:py-[60px] lg:py-20 px-4 lg:px-0">
      <div className="mb-4">
        <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold text-center mb-2">
          Courses Available
        </h2>
        <p className="max-w-xl mx-auto text-center text-[14px] md:text-[16px] lg:text-[18px]">
          We offer structured, cohort-based training programs in a variety of
          tech disciplines, including:
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {availablecourses.map((course, index) => (
          <div key={index} className="bg-[#FFF1F0] rounded-lg p-3 lg:p-6">
            <p className="bg-[#FFF] p-2 rounded-full w-fit h-fit mb-2">
              {typeof course.icon === "string" ? (
                course.icon
              ) : (
                <course.icon className="h-8 w-8 text-[#DA251C]" />
              )}
            </p>
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 text-[12px] md:text-[14px] lg:text-[16px]">
              {course.description}
            </p>
            <Link href="/courses" className="inline-block mt-4 hover:underline">
              Learn more &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

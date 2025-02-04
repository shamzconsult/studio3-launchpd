import { explorecourses } from "@/const/courses";
import Image from "next/image";
import Link from "next/link";

export const ExploreCourses = () => {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 lg:px-0">
      <section className="flex  flex-col  md:flex-row gap-3 md:gap-16 mb-10">
        <div>
          <p className="mb-2">ExPLORE OUR COURSES</p>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            At Studio3 Launchpad
          </h1>
        </div>
        <p className="max-w-xl">
          We offer a diverse range of courses tailored to equip you with the
          skills and knowledge needed to thrive in today&apos;s fast-paced
          world. Whether you&apos;re a beginner or a seasoned professional, our
          courses are designed to help you achieve your learning goals.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {explorecourses.map((course, index) => (
          <Link
            href={`/course/${course.id}`}
            key={index}
            className="rounded-lg overflow-hidden border border-[#E3E3E3] lg:w-[360px] p-3"
          >
            <div className="lg:w-[100%] h-[250px] relative  mx-auto">
              <Image src={course.image} alt={course.title} fill />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold mb-1">{course.title}</h3>
              </div>
              <p className="text-sm mb-2">{course.description}</p>
              <button className="font-medium hover:underline">
                Learn more &rarr;
              </button>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

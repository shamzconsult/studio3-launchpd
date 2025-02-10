import Image from "next/image";
import Link from "next/link";

export type Course = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type ExploreCoursesProps = {
  explorecourses: Course[];
  header?: string;
};

export const CourseCard = ({ explorecourses, header }: ExploreCoursesProps) => {
  return (
    <div className="">
      {header && (
        <h1 className="text-3xl font-bold text-left mb-10">{header}</h1>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {explorecourses.map((course, index) => (
          <Link
            href={`/courses/${course.id}`}
            key={index}
            className="rounded-lg overflow-hidden border border-[#E3E3E3] lg:w-[360px] p-3 hover:shadow-md"
          >
            <div className="lg:w-[100%] h-[250px] relative mx-auto">
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

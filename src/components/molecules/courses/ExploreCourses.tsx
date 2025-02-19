import { CourseCard } from "@/components/atoms/CourseCard";
import { courses } from "@/const/courses";

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

      <CourseCard explorecourses={courses} />
    </div>
  );
};

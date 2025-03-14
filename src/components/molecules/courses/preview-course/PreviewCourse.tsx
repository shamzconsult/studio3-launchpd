import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { CourseAudience } from "./CourseAudience";
import { LearningOutcomes } from "./LearningOutcomes";
import { PreviewHero } from "./PreviewHero";
import { PricingPlan } from "./PricingPlan";
import { generalFAQ } from "@/const/faqs";
import FAQ from "@/components/atoms/FAQs";
import { CourseCard } from "@/components/atoms/CourseCard";
import { courses, CourseType } from "@/const/courses";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";
import Link from "next/link";

export const getRandomCourses = (courses: CourseType[], num: number) => {
  const shuffled = courses.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export const PreviewCourse = async ({ slug }: { slug: string }) => {
  const courseData = courses.find((course) => {
    return course.slug == slug;
  });
  if (!courseData) {
    return (
      <div className=" h-screen mt2 flex flex-col justify-center items-center">
        <h1 className="text-center font-bold  ">Course not found</h1>
        <Link
          className="text-sm text-slate-400 hover:underline cursor-pointer"
          href="/courses"
        >
          Click here to check other courses
        </Link>
      </div>
    );
  }

  const topThreeCourses = getRandomCourses(courses, 3);

  const courseFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "course");

  return (
    <div className="">
      <PreviewHero courseData={courseData} />
      <CourseAudience courseData={courseData} />
      <LearningOutcomes courseData={courseData} />
      <PricingPlan />
      <div className="py-16 lg:py-36 px-4">
        <TestimonialCard title="Testimonials" />
      </div>
      <FAQ faqData={courseFAQQuestions} />
      <div className="max-w-6xl mx-auto px-4 py-20 mt-8 lg:px-0">
        <CourseCard
          explorecourses={topThreeCourses}
          header="Explore Other Courses"
        />
      </div>
    </div>
  );
};

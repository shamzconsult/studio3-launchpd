import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { CourseAudience } from "./CourseAudience";
import { LearningOutcomes } from "./LearningOutcomes";
import { PreviewHero } from "./PreviewHero";
import { PricingPlan } from "./PricingPlan";
import { generalFAQ } from "@/const/faqs";
import FAQ from "@/components/atoms/FAQs";
import { Course, CourseCard } from "@/components/atoms/CourseCard";
import { courses } from "@/const/courses";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";

const getRandomCourses = (courses: Course[], num: number) => {
  const shuffled = courses.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export const PreviewCourse = async ({ id }: { id: number }) => {
  const courseData = courses.find((course) => course.id === id);
  console.log(courseData);

  const topThreeCourses = getRandomCourses(courses, 3);

  const courseFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "course");

  return (
    <div>
      <PreviewHero />
      <CourseAudience />
      <LearningOutcomes />
      <PricingPlan />
      <div className="py-16 lg:py-36">
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

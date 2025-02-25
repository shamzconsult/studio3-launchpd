import { availablecourses } from "@/const/courses";

export const AvailableCourses = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 lg:px-0">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          Courses Available
        </h2>
        <p className="max-w-xl mx-auto text-center">
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
                <course.icon className="h-8 w-8" />
              )}
            </p>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <a href="/courses" className="inline-block mt-4 hover:underline">
              Learn more &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

import { EyeIcon } from "@/components/icons/EyeIcon";
import { availablecourses } from "@/const/courses";

export const AvailableCourses = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          Courses Available
        </h2>
        <p className="max-w-xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {availablecourses.map((course, index) => (
          <div key={index} className="bg-[#FFF1F0] shadow-md rounded-lg p-6">
            <p className="bg-[#F5847E] p-2 rounded-lg w-fit h-fit mb-2">
              <EyeIcon className="h-8 w-8" />
            </p>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <a href="#" className="inline-block mt-4 hover:underline">
              Learn more &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

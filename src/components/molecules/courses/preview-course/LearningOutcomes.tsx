import { MdCheckCircleOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt, FaTv } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { CourseType } from "@/const/courses";

export const LearningOutcomes = ({
  courseData,
}: {
  courseData: CourseType;
}) => {
  const outcomes = courseData.outcomes;

  const features = [
    {
      title: "Course Format",
      description: "Instructor led",
      icon: CiLocationOn,
    },
    {
      title: "Learning Model",
      description: "Cohort based",
      icon: MdOutlineGroups,
    },
    {
      title: "Program Duration",
      description: "4 Months",
      icon: FaRegCalendarAlt,
    },
    {
      title: "Delivery Method",
      description: "Live classes, Project based",
      icon: FaTv,
    },
    {
      title: "Location",
      description: "Online",
      icon: CiLocationOn,
    },
    {
      title: "Credential",
      description: "Digital Certificate",
      icon: FiBook,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto  py-20 px-4 lg:px-2 ">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-24 justify-between items-start ">
        <ul className="space-y-8 max-w-xl">
          {outcomes.map((outcome, index) => (
            <li
              key={index}
              className="flex items-center gap-4 border-b border-gray-100 py-2"
            >
              <div className="text-red-600">
                <MdCheckCircleOutline size={20} />
              </div>
              <p>{outcome}</p>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold  mb-4 lg:text-nowrap">
            Learning Outcomes
          </h2>
          <p className=" mb-8">{courseData.outcomesHeader || ""}</p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-10 lg:py-24 mt-24 lg:mt-56 px-4 bg-[#FFF6EF] rounded-xl border border-gray-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Program Structure</h2>
          <p className=" mt-2">
            We provide affordable plans, and offer payment options that would
            help you
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 gap-2"
            >
              <div className="text-2xl p-2 bg-[#FFD0CD] rounded-lg">
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold ">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

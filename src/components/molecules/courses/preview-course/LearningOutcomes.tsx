import { MdCheckCircleOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt, FaTv } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { FiBook } from "react-icons/fi";

export const LearningOutcomes = () => {
  const outcomes = [
    "Understand the core concepts of data analysis.",
    "Machine Learning Techniques: Supervised and unsupervised learning.",
    "Data Science Fundamentals: Data cleaning, visualization, and statistical analysis.",
    "AI Applications: Neural networks, natural language processing, and computer vision.",
    "Tools and Frameworks: Python, pandas, and more.",
  ];

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
    <div className="max-w-6xl mx-auto  py-20 px-6 lg:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 justify-between items-start">
        <ul className="space-y-8">
          {outcomes.map((outcome, index) => (
            <li
              key={index}
              className="flex items-center gap-4 border-b border-gray-100"
            >
              <div className="text-red-600">
                <MdCheckCircleOutline size={20} />
              </div>
              <p className="text-gray-700">{outcome}</p>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Learning Outcomes
          </h2>
          <p className="text-gray-600 mb-8">
            In our Data Analytics program, you will achieve the following
            learning outcomes:
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-24 mt-24 lg:mt-56 px-4 bg-[#FFF6EF] rounded-xl border border-gray-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Program Structure</h2>
          <p className="text-gray-600 mt-2">
            We provide affordable plans, and offer payment options that would
            help you
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 gap-2"
            >
              <div className="text-2xl p-2 bg-[#FFD0CD] rounded-lg">
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

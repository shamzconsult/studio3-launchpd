import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

export const ProgramStructure = () => {
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
  ];
  return (
    <div className="max-w-6xl mx-auto py-24 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Program Structure</h2>
        <p className="text-gray-600 mt-2">
          We provide affordable plans, and offer payment options that would help
          you
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
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

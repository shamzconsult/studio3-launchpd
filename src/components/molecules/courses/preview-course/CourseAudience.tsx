"use client";

import { CourseType } from "@/const/courses";
import Image from "next/image";
import { IconType } from "react-icons";
import { BsLightningCharge } from "react-icons/bs";
import { FaHourglassStart } from "react-icons/fa";
import { GiGears, GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineLightbulb, MdOutlineLightMode } from "react-icons/md";

const iconMap: Record<string, IconType> = {
  FaHourglassStart,
  GiGears,
  BsLightningCharge,
  GiGiftOfKnowledge,
  MdOutlineLightbulb,
  MdOutlineLightMode,
};

export const CourseAudience = ({ courseData }: { courseData: CourseType }) => {
  const audienceDetails = courseData.audienceDetails;

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 mt-8 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold max-w-md  mb-8">
            Who is this Course for?
          </h2>
          <div className="relative w-full lg:w-[385px] h-[268px]">
            <Image
              src={courseData.image || ""}
              alt="course"
              fill
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:gap-12">
          {audienceDetails.map(({ icon, text }, index) => {
            const IconComponent = iconMap[icon];
            return (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="bg-[#FFD0CD] p-3 rounded-full">
                  {IconComponent && (
                    <IconComponent className="text-lg text-[#0A0A0A]" />
                  )}
                </div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

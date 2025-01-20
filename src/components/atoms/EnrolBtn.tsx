"use client";

import { ReactNode } from "react";

export const EnrolBtn = ({
  title,
  icon,
  bgColor,
  borderColor,
  textColor,
  width = "primary",
}: {
  title: string;
  icon: ReactNode;
  bgColor: string;
  borderColor: string;
  textColor: string;
  width: string;
}) => {
  const backgroundColor =
    bgColor === "primary"
      ? "#009345"
      : bgColor === "secondary"
      ? "#E33629"
      : "transparent";

  const widthClass = width === "primary" ? "w-[400px] " : "w-[200px] ";
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        color: textColor,
      }}
      className={` ${widthClass} text-xl font-medium`}
    >
      {title}
      <span className="mx-1">
        {icon}
        {/* <FiArrowRight /> */}
      </span>
    </button>
  );
};

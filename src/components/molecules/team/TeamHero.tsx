import React from "react";

export const TeamHero = () => {
  return (
    <div className="max-w-6xl mx-auto  px-4 lg:px-0 py-[60px] lg:py-[80px] mt-16 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-14">
        <h1 className="text-[28px] md:text-[40px]  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4">
          Meet the Experts Guiding Your Learning Journey
        </h1>
        <h4 className="max-w-xl text-[14px] md:text-[16px] ">
          With decades of combined experience in the industry, our team includes
          seasoned professionals, educators, and support specialists who are
          passionate about your success.
        </h4>
      </div>
    </div>
  );
};

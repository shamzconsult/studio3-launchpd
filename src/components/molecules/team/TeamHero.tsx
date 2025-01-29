import React from "react";

export const TeamHero = () => {
  return (
    <div className="container mx-auto  px-4 lg:px-0 py-20 mt-10 lg:mt-20">
      <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-14">
        <h1 className="text-2xl md:text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[80px]  font-bold mb-4">
          Meet the Experts Guiding Your Learning Journey
        </h1>
        <h4 className="max-w-2xl">
          With decades of combined experience in the industry, our team includes
          seasoned professionals, educators, and support specialists who are
          passionate about your success.
        </h4>
      </div>
    </div>
  );
};

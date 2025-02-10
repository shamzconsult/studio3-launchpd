import Image from "next/image";
import React from "react";

export const Eligibility = () => {
  return (
    <div className="bg-[#FBE9E8]">
      <section className="max-w-6xl mx-auto flex flex-col justify-center lg:flex-row gap-12 py-20 px-4 lg:px-0">
        <div className="relative lg:w-[560px] h-[374px]  ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1738565030/edutech/Frame_1000003601_xd0srm.png"
            alt="Students Learning"
            fill
          />
        </div>
        <div className="max-w-xl flex flex-col gap-3">
          <h1 className="text-3xl  md:text-4xl font-extrabold leading-normal md:leading-[40px]">
            Eligibility Criteria
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis lorem in ante feugiat, ac vehicula
          </p>
          <ul className=" list-disc lg:px-8 flex flex-col gap-2 px-4 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <button className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg  transition">
            Apply Now +
          </button>
        </div>
      </section>
    </div>
  );
};

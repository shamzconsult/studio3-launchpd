import Image from "next/image";
import React from "react";

export const Eligibility = () => {
  return (
    <div className="bg-[#FBE9E8]">
      <section className="max-w-6xl mx-auto flex flex-col justify-center lg:flex-row gap-12 py-20 px-6 lg:px-0">
        <div className="relative lg:w-[560px] h-[374px]  ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1738565030/edutech/Frame_1000003601_xd0srm.png"
            alt="Students Learning"
            fill
          />
        </div>
        <div className="max-w-xl flex flex-col gap-3">
          <h1 className="text-3xl mb-4  md:text-4xl font-extrabold leading-normal md:leading-[40px]">
            Eligibility Criteria
          </h1>
          <p>
          To qualify for financial aid, applicants must meet the following requirements:
          </p>
          <ul className=" list-disc lg:px-8 flex flex-col gap-2 px-4 ">
            <li><span className="font-extrabold">Enrolled in a Program – </span>You must be officially enrolled in one of our courses.</li>
            <li><span className="font-extrabold">Demonstrated Commitment – </span>Active participation in coursework and assignments is required.</li>
            <li><span className="font-extrabold">Financial Need – </span> Applicants should provide a brief statement explaining their need for financial assistance.</li>
            <li><span className="font-extrabold">Consistent Progress – </span>Maintaining a good academic standing and engagement in cohort activities is necessary.</li>
            <li><span className="font-extrabold">Application Submission – </span>Complete the financial aid application with supporting documents before the deadline.</li>
          </ul>
          <p className="">Take advantage of this opportunity to invest in your future!</p>
          <button className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg  transition"> Apply Now
            <span className="font-extrabold"> &rarr;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

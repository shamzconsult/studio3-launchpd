import React from "react";

export const JoinUs = () => {
  return (
    <div className="py-20 bg-[#FAFAFA] px-4">
      <div className="bg-black text-white py-16 px-10 rounded-lg shadow-md text-center container mx-auto">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight">
          Train, Empower, Equip, Build
        </h1>
        <p className="text-[#FAFAFA] max-w-xl mx-auto mt-4">
          Join thousands of leaners Kickstart your tech career by enrolling in
          our state of the art internship program.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-medium text-lg shadow hover:bg-red-700"
          >
            Get Started &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

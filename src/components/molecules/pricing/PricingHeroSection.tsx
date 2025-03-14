import Image from "next/image";
import React from "react";

export const PricingHeroSection = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById("price");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="max-w-6xl mx-auto py-20  flex flex-col gap-5 lg:flex-row justify-between lg:items-center mt-12 w-full px-4 lg:mt-20 lg:px-0">
      <div className="max-w-xl">
        <h1 className="text-[32px] md:text-[40px]  lg:text-5xl font-extrabold leading-normal md:leading-[60px] mb-4">
          <span className="text-[#DA251C]">Affordable</span> plans for your
          educational journey ahead!
        </h1>
        <p className="text-[14px]  md:text-[16px] mb-6">
          Empowering learners and teachers alike. Discover the path to success
          with us!
        </p>
        <button
          onClick={handleScroll}
          className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg hover:bg-red-600 transition"
        >
          See prices &rarr;
        </button>
      </div>

      <div className="relative w-full h-[250px] lg:h-[350px] lg:w-[480px] md:mt-12">
        <Image
          src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1739784903/Image_3_oqbli6.png"
          alt="Students Learning"
          fill
        />
      </div>
    </section>
  );
};

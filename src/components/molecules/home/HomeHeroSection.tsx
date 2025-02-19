import { CurveLine } from "@/components/atoms/curveline";
import Image from "next/image";

export const HomeHeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-20  flex flex-col gap-5 lg:flex-row justify-center lg:items-center mt-16 w-full  lg:px-0 ">
      <div className="max-w-xl p-4 lg:p-0">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-normal md:leading-[60px] mb-4">
          Unlock your
          <span className="text-[#DA251C] relative whitespace-nowrap pl-1">
            Potential
            <CurveLine />
          </span>
          <br />
          with our Innovative Learning Platform
        </h1>
        <p className="text-lg mb-6">
          Designed to empower students and educators. Join us on a journey of
          growth!
        </p>

        <button className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md hover:shadow-lg  transition duration-150 mt-4 lg:mt-0">
          Get Started &rarr;
        </button>
      </div>

      <div className="relative w-full h-[300px] lg:h-[400px] md:h-[500px] lg:w-[564px] ">
        <Image
          src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1739947381/Group_22_cfpwfk.png"
          alt="Students Learning"
          fill
        />
      </div>
    </section>
  );
};

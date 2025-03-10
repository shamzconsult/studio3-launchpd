import Image from "next/image";

export const CourseHeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto  px-4 py-20 lg:px-0 lg:mt-20">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="max-w-xl mt-10">
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl  font-bold leading-tight mb-4">
            Learn. Grow. Succeed.
          </h1>
          <h4 className="text-[14px]  md:text-[16px] max-w-l ">
            Start your journey to success with our expert-led courses designed
            to unlock your full potential. Start learning today and achieve your
            dreams, gain in-demand skills, and unlock your potential!
          </h4>
        </div>
        <div className="relative w-full h-[250px]  lg:w-[480px]  lg:h-[340px] md:mt-12">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1739345035/edutech/Course_bw3syl.png"
            alt="Student"
            fill
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

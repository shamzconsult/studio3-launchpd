import Image from "next/image";

export const CourseHeroSection = () => {
  return (
    <div className="container mx-auto  px-4 py-20 lg:mt-20">
      <section className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="max-w-3xl mt-10">
          <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-4">
            Learn. Grow. Succeed.
          </h1>
          <h4 className="text-lg">
            Start your journey to success with our expert-led courses designed
            to unlock your full potential. Start learning today and achieve your
            dreams, gain in-demand skills, and unlock your potential!
          </h4>
        </div>
        <div className="relative w-full h-[300px] lg:w-[750px]  lg:h-[500px] md:mt-12">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358223/edutech/Frame_1000003558_o0zhp3.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
    </div>
  );
};

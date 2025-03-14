import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto  px-4 py-20 lg:mt-20 lg:px-0">
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="max-w-xl mt-10">
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px] font-bold  mb-4">
            Where ambition meets opportunity!
          </h1>
          <h4 className="text-[14px] md:text-[16px] max-w-3xl">
            Bridging the gap between potential and achievement by offering
            immersive, hands-on learning experiences that prepare learners for
            real-world challenges in the tech industry.
          </h4>
        </div>
        <div className="relative w-full h-[250px] lg:w-[480px] lg:h-[340px] md:mt-12">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1740992811/course-hero-min_mmsiry.jpg"
            alt="Students Learning"
            fill
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="mt-32 flex flex-col gap-8 p-2 md:p-6 bg-red-50 border border-gray-300 rounded-lg ">
        <div className="flex flex-col lg:flex-row items-start gap-3">
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4">
            Train, Empower, Equip, Build
          </h1>
          <h4 className="max-w-xl text-[12px] md:text-[14px] lg:text-[16px]">
            Our goal is to empower young individuals aged 15-35 with the skills
            they need to thrive in today&#8217;s technology-driven world. Our
            mission is to bridge the gap between potential and achievement by
            offering immersive, hands-on learning experiences that prepare
            learners for real-world challenges in the tech industry.
          </h4>
        </div>
        <div className="w-full h-[250px] lg:h-[500px] relative ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1741164676/Frame_1000003593_zrmhq7.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
    </div>
  );
};

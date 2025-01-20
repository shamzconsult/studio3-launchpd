import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <div className="container mx-auto  px-4 py-20 lg:mt-20">
      <section className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="max-w-3xl mt-10">
          <h1 className="text-2xl md:text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[80px] font-bold  mb-4">
            Where ambition meets opportunity!
          </h1>
          <h4 className="text-lg">
            Bridging the gap between potential and achievement by offering
            immersive, hands-on learning experiences that prepare learners for
            real-world challenges in the tech industry.
          </h4>
        </div>
        <div className="relative w-full h-[300px] lg:w-[650px] lg:h-[500px] md:mt-12">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358223/edutech/Frame_1000003558_o0zhp3.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
      <section className="mt-32 flex flex-col gap-8 p-6 bg-red-50 border border-gray-300 rounded-lg ">
        <div className="flex flex-col lg:flex-row items-start gap-3">
          <h1 className="text-2xl md:text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[80px]  font-bold mb-4">
            Train, Empower, Equip, Build
          </h1>
          <h4 className="max-w-3xl">
            Our goal is to empower young individuals aged 15-35 with the skills
            they need to thrive in today&#8217;s technology-driven world. Our
            mission is to bridge the gap between potential and achievement by
            offering immersive, hands-on learning experiences that prepare
            learners for real-world challenges in the tech industry.
          </h4>
        </div>
        <div className="w-full h-[300px] lg:h-[500px] relative ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358225/edutech/Frame_1000003593_ccfshe.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
    </div>
  );
};

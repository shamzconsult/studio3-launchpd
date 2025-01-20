import Image from "next/image";

export const HomeHeroSection = () => {
  return (
    <section className="container mx-auto py-20  flex flex-col gap-5 lg:flex-row justify-center lg:items-center mt-12 w-full md:px-4 ">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-normal md:leading-[80px] mb-4">
          Unlock your <span className="text-[#DA251C]">Potential</span> <br />
          with our Innovative Learning Platform
        </h1>
        <p className="text-lg mb-6">
          Designed to empower students and educators. Join us on a journey of
          growth!
        </p>
        <button className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg hover:bg-red-600 transition">
          Get Started &rarr;
        </button>
      </div>

      <div className="relative w-full h-[300px] md:h-[500px] lg:w-[650px] ">
        <Image
          src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737360809/edutech/Image_and_Icons_Container_mutasn.png"
          alt="Students Learning"
          fill
        />
      </div>
    </section>
  );
};

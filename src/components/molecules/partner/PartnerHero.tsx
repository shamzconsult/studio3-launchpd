import Image from "next/image";

export const PartnerHero = () => {
  return (
    <div className="w-full bg-[#FFF6EF]">
      <section className="max-w-6xl  mx-auto py-20  flex flex-col gap-5 lg:flex-row justify-between lg:items-center mt-12 w-full  ">
        <div className="max-w-xl">
          <h1 className="text-3xl text-[#DA251C] md:text-5xl font-extrabold leading-normal md:leading-[60px] mb-4">
            Partner with us for a brighter future
          </h1>
          <p className="text-lg mb-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg hover:bg-red-600 transition">
            Get in touch &rarr;
          </button>
        </div>

        <div className="relative w-full h-[300px]  lg:w-[445px] ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737967967/edutech/Image_1_u0it2u.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
    </div>
  );
};

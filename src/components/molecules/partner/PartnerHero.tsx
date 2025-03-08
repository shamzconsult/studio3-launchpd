import Image from "next/image";

export const PartnerHero = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById("form");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full bg-[#FFF6EF]">
      <section className="max-w-6xl  mx-auto py-20  flex flex-col gap-5 lg:flex-row justify-between lg:items-center mt-12 w-full lg:mt-20 px-4 lg:px-0  ">
        <div className="max-w-xl">
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl text-[#DA251C] md:text-5xl font-extrabold leading-normal md:leading-[60px] mb-4">
            Partner with us for a brighter future
          </h1>
          <p className="text-[14px] md:text-[16px] mb-6 max-w-xl">
            &#34;Empowering education, transforming lives, and driving
            success—together.&#34;
          </p>
          <button
            onClick={handleScroll}
            className="px-8 py-2 md:w-fit w-full text-white bg-[#DA251C] rounded-md shadow-lg hover:bg-red-600 transition"
          >
            Get in touch &rarr;
          </button>
        </div>

        <div className="relative w-full h-[250px] lg:h-[300px]  lg:w-[445px] mt-2 lg:mt-0 ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1739345328/edutech/partner_img_piymbg.png"
            alt="Students Learning"
            fill
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

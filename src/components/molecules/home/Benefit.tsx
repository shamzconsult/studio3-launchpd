import { BenefitCards } from "@/components/atoms/BenefitCards";

export const Benefit = () => {
  return (
    <section className="py-20">
      <BenefitCards
        header="Benefits"
        subheader="Some of the benefits of learning with us."
      />

      <div
        className="py-32 mt-16 bg-cover bg-center relative flex items-center justify-center px-6 lg:px-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcgghkk7q/image/upload/v1737375235/edutech/Header_Text_toijhd.png')",
        }}
      >
        <div className="relative text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Financial Aid</h1>
          <p className="mt-2 text-xl md:text-2xl font-medium  ">
            Hey there! Want to level up? Join our EdTech crew today!
          </p>
          <button className="mt-6 px-6 py-2 md:w-fit w-full  text-white bg-[#DA251C] rounded-md hover:shadow-lg duration-150 ">
            Start Application &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

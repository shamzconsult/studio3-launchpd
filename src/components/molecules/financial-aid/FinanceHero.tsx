import Image from "next/image";

export const FinanceHero = () => {
  return (
    <div className="w-full lg:py-20  px-4 lg:px-0">
      <section className="max-w-6xl bg-[#851711] rounded-lg  mx-auto   flex flex-col  lg:flex-row justify-between lg:items-center mt-32 w-full  ">
        <div className="max-w-xl  text-[#FAFAFA] lg:w-1/2 h-inherit p-6 rounded-l">
          <h1 className="text-3xl  md:text-4xl font-extrabold leading-normal md:leading-[40px] mb-4">
            Financial Aid: A step to your future
          </h1>
          <p className="text-lg mb-6 max-w-xl">
            Invest in yourself and redefine your career. Our financing options
            help make your tech career dream a reality. Find the right finance
            fit with installment plans, Financial aid, tuition discounts,
            scholarships, and more. Take a step to unlock your future today!
          </p>
          <button className="px-8 py-2 md:w-fit w-full bg-white text-[#DA251C] rounded-md shadow-lg  transition">
            Apply Now +
          </button>
        </div>

        <div className="relative w-full h-[400px] lg:w-1/2 ">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1738560748/edutech/Frame_1000003594_jesu1d.png"
            alt="Students Learning"
            fill
          />
        </div>
      </section>
    </div>
  );
};

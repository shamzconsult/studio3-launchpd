import { BenefitCards } from "@/components/atoms/BenefitCards";
import { benefits } from "@/const/benefits";

export const Benefit = () => {
  return (
    <section className="">
      <BenefitCards
        header="Benefits"
        subheader="Some of the benefits of learning with us."
        data={benefits}
      />

      <div
        className="py-32 bg-cover bg-center relative flex items-center justify-center px-4 lg:px-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcgghkk7q/image/upload/v1737375235/edutech/Header_Text_toijhd.png')",
        }}
      >
        <div className="relative text-center">
          <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold">
            Financial Aid
          </h1>
          <p className="mt-2 text-[14px] md:text-[16px] lg:text-[18px] font-medium max-w-4xl mx-auto  ">
            Looking for financial support to boost your learning journey?
            Discover our financial aid options and join our Studio3 Launchpad
            community today!
          </p>
          <button className="mt-6 px-6 py-2 md:w-fit w-full  text-white bg-[#DA251C] rounded-md hover:shadow-lg duration-150 ">
            Start Application &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

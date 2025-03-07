import { BenefitType } from "@/const/benefits";

export const BenefitCards = ({
  header,
  subheader,
  data,
}: {
  header: string;
  subheader: string;
  data: BenefitType[];
}) => {
  return (
    <div className="px-2 py-[28px] md:py-[60px] lg:py-[80px] lg:px-0">
      <div className="text-center mb-12">
        <h2 className=" text-[20px] md:text-3xl font-bold"> {header}</h2>
        <p className="mt-2 text-[16px] lg:text-xl">{subheader}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 lg:px-0">
        {data.map((benefit, index) => (
          <div
            key={index}
            className="px-2 py-4 lg:py-6 lg:px-6 bg-[#FBE9E8] rounded-lg flex flex-col gap-3"
          >
            <div className="text-[#DA251C] text-3xl  bg-white rounded-full p-3 w-fit">
              {typeof benefit.icon === "string" ? (
                benefit.icon
              ) : (
                <benefit.icon />
              )}
            </div>
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold ">
              {benefit.title}
            </h3>
            <p className="text-[12px] md:text-[14px] lg:text-[16px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

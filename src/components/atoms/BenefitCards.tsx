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
    <div className="px-4 lg:px-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold"> {header}</h2>
        <p className="mt-2 text-xl">{subheader}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-3 lg:px-0">
        {data.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-[#FBE9E8] rounded-lg flex flex-col gap-3"
          >
            <div className="text-[#DA251C] text-3xl  bg-white rounded-full p-3 w-fit">
              {typeof benefit.icon === "string" ? (
                benefit.icon
              ) : (
                <benefit.icon />
              )}
            </div>
            <h3 className="text-xl font-semibold ">{benefit.title}</h3>
            <p className="">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { EyeIcon } from "@/components/icons/EyeIcon";
import { featureslist } from "@/const/features";
import Image from "next/image";

export const WhyUs = () => {
  return (
    <div className="bg-black text-white p-8 ">
      <div className="max-w-6xl mx-auto py-20 flex flex-col-reverse md:flex-row lg:gap-16 gap-6">
        <div className="grid grid-cols-1 gap-8 mt-4">
          {featureslist.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 lg:flex-row items-start "
            >
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 bg-[#EEEEEE] rounded-full text-black">
                  {typeof feature.icon === "string" ? (
                    feature.icon
                  ) : (
                    <feature.icon className="h-6 w-6" />
                  )}
                </span>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold ">{feature.title}</h3>
                <p className="text-[#FAFAFA]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className=" text-[#FAFAFA]"> WHY CHOOSE STUDIO3 LAUNCHPAD</p>
          <h1 className="text-2xl md:text-4xl  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4 max-w-2xl">
            A blend of theoretical knowledge and practical applications.
          </h1>
          <div className=" w-full h-[300px] lg:w-[600px] lg:h-[450px] relative">
            <Image
              src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1737371047/edutech/Frame_1000003558_e5orsr.png"
              alt="Students Learning"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

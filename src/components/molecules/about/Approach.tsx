import { features } from "@/const/features";

export const Approach = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <section className="flex  flex-col  md:flex-row justify-between gap-3 md:gap-10 mb-3">
        <div className="max-w-3xl">
          <p className="mb-2">Our Approach</p>
          <h1 className="text-[32px] md:text-[40px]  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4 ">
            At Studio3 Launchpad
          </h1>
        </div>
        <p className="max-w-xl text-[12px] md:text-[14px] lg:text-[16px]">
          We are on a mission of equipping young individuals with the skills,
          knowledge, and confidence to unlock their potential and drive change
          in the tech industry and beyond.
        </p>
      </section>
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2  my-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-2 bg-[#FAFAFA] border border-gray-300 rounded-lg px-2 py-4 md:p-[20px]"
          >
            <p className="bg-[#FBE9E8] p-2 rounded-full w-fit h-fit">
              {typeof feature.icon === "string" ? (
                feature.icon
              ) : (
                <feature.icon className="h-6 w-6" />
              )}
            </p>
            <div>
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
                {feature.title}
              </h3>
              <p className="opacity-90 text-[14px] lg:text-[16px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

import { features } from "@/const/features";

export const Approach = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <section className="flex  flex-col  md:flex-row justify-between gap-3 md:gap-10 mb-3">
        <div className="max-w-3xl">
          <p className="mb-2">Our Approach</p>
          <h1 className="text-2xl md:text-4xl  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4 ">
            At Studio3 Launchpad
          </h1>
        </div>
        <p className="max-w-xl">
          We are on a mission of equipping young individuals with the skills,
          knowledge, and confidence to unlock their potential and drive change
          in the tech industry and beyond.
        </p>
      </section>
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2  my-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-2 bg-[#FAFAFA] border border-gray-300 rounded-lg p-4 py-6"
          >
            <p className="bg-[#FBE9E8] p-2 rounded-full w-fit h-fit">
              {typeof feature.icon === "string" ? (
                feature.icon
              ) : (
                <feature.icon className="h-6 w-6" />
              )}
            </p>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

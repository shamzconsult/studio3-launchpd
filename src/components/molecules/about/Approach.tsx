import { EyeIcon } from "@/components/icons/EyeIcon";
import { features } from "@/const/features";

export const Approach = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <section className="flex  flex-col  md:flex-row md:gap-16 gap-3 mb-3">
        <div>
          <p className="mb-2">Our Approach</p>
          <h1 className="text-2xl md:text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[80px]  font-bold mb-4 ">
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
            className="flex gap-2 bg-[#FAFAFA] border border-gray-300 rounded-lg p-4 py-10"
          >
            <p className="bg-gray-100 p-2 rounded-lg w-fit h-fit">
              <EyeIcon className="h-8 w-8" />
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

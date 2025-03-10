import { team } from "@/const/team";
import Image from "next/image";

export const Tutors = () => {
  const firstThreeTeam = team.slice(0, 3);
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <p className="text-[10px] md:text-[12px] lg:text-[14px] bg-[#FFECBF] p-2 rounded-lg w-fit mb-2 px-6">
        EXPERT TEAM
      </p>
      <h1 className="mt-3 text-[24px] md:text-[32px]  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold  max-w-3xl">
        The Team Behind it all
      </h1>
      <p className="mt-3 max-w-4xl text-[12px] md:text-[14px] lg:text-[16px] lg:mt-6">
        Our team is a dynamic mix of industry experts and educators, united by a
        passion for empowering the next generation of tech talent. Our mission
        is simple: to provide hands-on, industry-relevant training that prepares
        learners for high-demand careers.
      </p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mt-8">
        {firstThreeTeam.map((tutor, index) => (
          <div
            key={index}
            className="bg-[#FFF6EF] rounded-lg overflow-hidden lg:w-[360px] "
          >
            <div className=" w-full  h-[300px] relative">
              <Image src={tutor.src} alt="tutor" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 text-[16px] md:text-[18px] lg:text-[20px]">
                {tutor.name}
              </h3>
              <p className="text-sm mb-2 text-[14px] lg:text-[16px]">
                {tutor.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

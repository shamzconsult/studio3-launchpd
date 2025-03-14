import { team } from "@/const/team";
import Image from "next/image";

export const TeamCard = () => {
  return (
    <div className=" px-4 lg:px-2  ">
      <div className=" mt-3 flex flex-wrap justify-center items-center max-w-6xl mx-auto gap-8">
        {team.map((tutor, index) => (
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
              <p className="text-[14px] lg:text-[16px] mb-2">
                {tutor.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

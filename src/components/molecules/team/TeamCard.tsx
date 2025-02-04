import { team } from "@/const/team";
import Image from "next/image";

export const TeamCard = () => {
  return (
    <div className="max-w-6xl mx-auto  px-4 lg:px-0  ">
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {team.map((tutor, index) => (
          <div
            key={index}
            className="bg-[#FFF6EF] rounded-lg overflow-hidden lg:w-[360px] "
          >
            <div className=" w-full  h-[300px] relative">
              <Image src={tutor.src} alt="tutor" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{tutor.name}</h3>
              <p className="text-sm mb-2">{tutor.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

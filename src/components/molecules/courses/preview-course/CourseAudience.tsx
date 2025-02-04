import Image from "next/image";
import { FaHeadSideVirus } from "react-icons/fa";

export const CourseAudience = () => {
  const audienceDetails = [
    {
      icon: FaHeadSideVirus,
      text: "Ideal for beginners and aspiring data analysts.",
    },
    {
      icon: FaHeadSideVirus,
      text: "Individuals with a basic understanding of programming and statistics.",
    },
    {
      icon: FaHeadSideVirus,
      text: "Ideal for people looking to gain knowledge for career advancement.",
    },
    {
      icon: FaHeadSideVirus,
      text: "Mid-career professionals looking to transition into tech.",
    },
    {
      icon: FaHeadSideVirus,
      text: "Individuals who want to develop their skills.",
    },
    {
      icon: FaHeadSideVirus,
      text: "Ideal for beginners and aspiring data analysts.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 mt-8 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold max-w-md text-gray-800 mb-8">
            Who is this Course for?
          </h2>
          <div className="relative w-full lg:w-[385px] h-[268px]">
            <Image
              src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1738674104/edutech/image_2_tllrme.png"
              alt="course"
              fill
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:gap-12">
          {audienceDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="bg-[#FFD0CD] p-3 rounded-full">
                  <Icon size={24} />
                </div>
                <p className="text-gray-700">{detail.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

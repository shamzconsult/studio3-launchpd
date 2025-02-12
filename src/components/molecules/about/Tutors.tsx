import { tutors } from "@/const/courses";
import Image from "next/image";

export const Tutors = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <p className=" font-thin">EXPERT TUTORS</p>
      <h1 className="mt-3 text-2xl md:text-4xl  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold  max-w-3xl">
        Learn from Industry Experts
      </h1>
      <p className="mt-3 max-w-4xl lg:mt-6">
        We are bridging the gap between potential and achievement by offering
        immersive, hands-on learning experiences that prepare learners for
        real-world challenges in the tech industry. We offer structured,
        cohort-based training programs in a variety of tech disciplines,
        including:
      </p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mt-8">
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="bg-[#FFF6EF] rounded-lg overflow-hidden lg:w-[360px] "
          >
            <div className=" w-full  h-[300px] relative">
              <Image src={tutor.src} alt="tutor" fill />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{tutor.name}</h3>
              <p className="text-sm mb-2">{tutor.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-[#DA251C]  text-white px-4 py-1.5">
          Explore More Courses
        </button>
      </div>
    </div>
  );
};

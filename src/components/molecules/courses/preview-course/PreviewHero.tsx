import { BsFillPeopleFill } from "react-icons/bs";
import { CiFolderOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const PreviewHero = () => {
  return (
    <section className="bg-[#FFF6EF]">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-16 max-w-6xl mx-auto  px-4 py-20 lg:px-0 mt-20">
        <div className="text-center">
          <p className="font-medium tracking-wide">ABOUT THE COURSE</p>
          <h1 className="text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[60px] font-bold text-gray-800 max-w-2xl mt-6">
            Learn about our Data Analytics and AI
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-center">
            Unlock the power of data and artificial intelligence. Designed for
            aspiring data scientists and AI enthusiasts, this course blends live
            instruction, hands-on projects, and collaborative learning to equip
            you with the skills needed to solve real-world problems.
          </p>
        </div>

        <div className="bg-[#991A14] text-white w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center p-6 gap-4">
          <div className="text-center md:text-left">
            <div className="flex gap-3">
              <p className="uppercase font-semibold">Tuition Fee</p>
              <p className="bg-[#FAFAFA] text-[#991A14] text-xs py-1 px-2 rounded-md font-medium mr-2">
                Early discount up to 5%
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-6">
              <p className="text-4xl lg:text-5xl font-bold mt-2">$300</p>
              <p className="text-gray-200 line-through text-lg ml-3">$400</p>
            </div>
          </div>

          <div className="flex-1 text-left bg-[#FAFAFA] rounded-xl border border-gray-500  p-4 text-gray-600">
            <ul className="font-medium  space-y-3 grid grid-cols-2 justify-center items-center">
              <li className="flex items-center gap-1">
                <HiOutlineLocationMarker /> Online
              </li>
              <li className="flex items-center gap-1">
                <BsFillPeopleFill />
                Cohort Based
              </li>
              <li className="flex items-center gap-1">
                <CiFolderOn /> Project Based
              </li>
              <li className="flex items-center gap-1">
                <FaRegCalendarAlt /> 6 Months
              </li>
              <li className="flex items-center gap-1">
                <HiOutlineLocationMarker /> Instructor Led
              </li>
              <li className="flex items-center gap-1">
                <FiBook /> Blended Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

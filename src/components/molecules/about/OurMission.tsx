import Image from "next/image";

export const OurMission = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737464191/edutech/edutech-new/Frame_1000003609_depv5f.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737464191/edutech/edutech-new/Frame_1000003613_zjydbo.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737464191/edutech/edutech-new/Frame_1000003613_zjydbo.png",
    },
  ];
  return (
    <div className="bg-[#FAFAFA] py-24 lg:mt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <section className="flex  flex-col justify-between md:flex-row gap-3 lg:gap-16 mb-3">
          <div>
            <p className="bg-[#FFECBF] p-2 rounded-lg w-fit mb-2">
              OUR MISSION
            </p>
            <p className="max-w-2xl">
              We are on a mission of equipping young individuals with the
              skills, knowledge, and confidence to unlock their potential and
              drive change in the tech industry and beyond.
            </p>
          </div>
          <h1 className="text-2xl md:text-4xl  lg:text-5xl leading-normal md:leading-relaxed lg:leading-[60px]  font-bold mb-4 ">
            Where ambition meets opportunity!
          </h1>
        </section>
        <div className="flex w-full h-[237px]  relative lg:hidden">
          <Image src={images[0].src} fill alt="student" />
        </div>
        <section className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[362px] md:h-[237px] rounded-lg relative"
            >
              <Image src={image.src} fill alt="student" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

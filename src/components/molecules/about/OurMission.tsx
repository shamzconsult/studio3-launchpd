import Image from "next/image";

export const OurMission = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358224/edutech/Frame_1000003609_uwvnab.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358226/edutech/Frame_1000003613_u6xfow.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737358226/edutech/Frame_1000003613_u6xfow.png",
    },
  ];
  return (
    <div className="bg-[#FAFAFA] py-24 mt-20">
      <div className="container mx-auto px-4">
        <section className="flex  flex-col justify-between md:flex-row gap-3 mb-3">
          <div>
            <p className="bg-[#FFECBF] p-2 rounded-lg w-fit mb-2">
              OUR MISSION
            </p>
            <p className="max-w-xl">
              We are on a mission of equipping young individuals with the
              skills, knowledge, and confidence to unlock their potential and
              drive change in the tech industry and beyond.
            </p>
          </div>
          <h1 className="text-2xl md:text-4xl  lg:text-6xl leading-normal md:leading-relaxed lg:leading-[80px]  font-bold mb-4 max-w-3xl">
            Where ambition meets opportunity!
          </h1>
        </section>
        <div className="w-full md:h-[400px] h-[300px] relative lg:hidden">
          <Image src={images[0].src} fill alt="student" />
        </div>
        <section className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {images.map((image, index) => (
            <div key={index} className="lg:w-[400px] h-[280px] relative">
              <Image src={image.src} fill alt="student" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

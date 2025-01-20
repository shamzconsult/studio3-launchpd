import Image from "next/image";
import Marquee from "react-fast-marquee";

type Logo = { src: string; alt: string };

export const Carousel = ({
  title,
  logos,
  header = "",
  subheader = "",
}: {
  title?: string;
  logos: Logo[];
  header?: string;
  subheader?: string;
}) => {
  return (
    <div className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex flex-col justify-center items-center py-10">
        {header && <h1 className="text-xl font-bold md:text-2xl">{header}</h1>}
        {subheader && <p className="text-lg">{subheader}</p>}
      </div>
      <section className=" flex flex-col md:flex-row justify-center items-center ">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <Marquee speed={50} pauseOnHover={false}>
          {logos?.map((logo, index) => (
            <div
              key={index}
              className="w-fit h-32  flex justify-center items-center mx-6 "
            >
              <Image src={logo?.src} alt={logo?.alt} width={100} height={100} />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
};

import { benefits } from "@/const/benefits";

export const Benefit = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Benefits</h2>
        <p className="mt-2 text-xl">
          Some of the benefits of learning with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-[#FBE9E8] rounded-lg flex flex-col gap-3"
          >
            <div className="text-[#DA251C] text-3xl  bg-[#FFD0CD] p-3 w-fit">
              {typeof benefit.icon === "string" ? (
                benefit.icon
              ) : (
                <benefit.icon />
              )}
            </div>
            <h3 className="text-xl font-semibold ">{benefit.title}</h3>
            <p className="">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div
        className="py-32 mt-16 bg-cover bg-center relative flex items-center justify-center "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcgghkk7q/image/upload/v1737355906/edutech/Header_Text_yovxn7.png')",
        }}
      >
        <div className="relative text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Financial Aid</h1>
          <p className="mt-2 text-xl md:text-2xl font-medium  ">
            Hey there! Want to level up? Join our EdTech crew today!
          </p>
          <button className="mt-6 px-6 py-2  text-white bg-[#DA251C] rounded-md">
            Start Application &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

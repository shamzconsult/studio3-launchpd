export const PricingPlan = () => {
  const pricingPlans = [
    {
      title: "Full Tuition",
      price: "$500",
      description: "Early discount up to 5%",
    },
    {
      title: "Part Payment",
      price: "$300",
      description: "Early discount up to 5%",
    },
    {
      title: "Financial Aid",
      price: "Up to 20%",
      description: "off Tuition",
    },
  ];
  return (
    <div className="py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Pricing
        </h2>
        <p className="mb-8">
          We provide affordable plans and offer payment options that would help
          you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className=" flex flex-col gap-4 border border-[#E3E3E3] rounded-xl p-6 text-left  transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                {plan.price}
              </p>
              <p className="bg-[#EBFFE8] text-green-600 text-sm w-fit px-4 py-1 inline-block rounded mb-4">
                {plan.description}
              </p>
              <button className="flex justify-center items-center gap-2 rounded-md text-[#DA251C] border-2 border-[#DA251C] px-4 py-2 w-full text-center transition">
                Enroll
                <span>&#x2794;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

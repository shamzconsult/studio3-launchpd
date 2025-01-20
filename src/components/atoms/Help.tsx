export const Help = () => {
  return (
    <div className="text-center py-20 bg-red-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Still Need our Help?</h2>
        <div className="flex flex-col md:flex-row  justify-center gap-4">
          <button className="bg-[#DA251C] text-white px-6 py-1.5 rounded-lg ">
            Call us
          </button>
          <button className="border border-[#DA251C] text-[#DA251C] px-6 py-1.5 rounded-lg hover:bg-red-100">
            Write us on WhatsApp
          </button>
          <button className=" text-[#DA251C] py-1.5 rounded-lg hover:bg-red-100">
            Send an Email
          </button>
        </div>
      </div>
    </div>
  );
};

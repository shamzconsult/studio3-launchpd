interface PartnerHeader {
  header?: string;
}

export const PartnerForm = ({ header = "" }: PartnerHeader) => {
  return (
    <div className="container mx-auto py-20">
      {header && (
        <h1 className="text-2xl font-bold text-center mb-6">{header}</h1>
      )}
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-[591px] mx-auto border-t-4 border-[#DA251C] mt-10">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
              placeholder="email address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
              placeholder="Type your message, enquiries or questions here"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#DA251C] text-white py-2 rounded-md hover:bg-red-600 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

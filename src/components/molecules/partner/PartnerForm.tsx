"use client";

import { useState } from "react";

interface PartnerHeader {
  header?: string;
}

export const PartnerForm = ({ header = "" }: PartnerHeader) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      return;
    }
    setIsSubmitted(true);
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div
      className="max-w-6xl mx-auto py-4 md:py-8 lg:py-20  px-4 lg:px-0 "
      id="form"
    >
      {header && (
        <h1 className="text-2xl font-bold text-center mb-6">{header}</h1>
      )}
      <div className="p-3 md:p-4 lg:p-8 rounded-2xl shadow-2xl w-full md:w-[591px] mx-auto border-t-4 border-[#DA251C] mt-10">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              Thank you for reaching out!
            </h2>
            <h3 className="text-[#DA251C] font-bold mb-4">
              We appreciate your patience.
            </h3>
            <p className="text-lg font-semibold mb-4">
              For a quicker response, please consider using our help channel.
            </p>
          </div>
        ) : (
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium  mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border placeholder:text-[14px] md:placeholder:text-[16px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border placeholder:text-[14px] md:placeholder:text-[16px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
                placeholder="email address"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium  mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border placeholder:text-[14px] md:placeholder:text-[16px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DA251C]"
                placeholder="Type your message, enquiries or questions here"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#DA251C] text-white py-2 rounded-md hover:bg-red-600 "
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const Help = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me/+447733366621", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+447733366621";
  };

  const sendEmail = () => {
    window.location.href = "mailto:Info@Studio3launchpad.com";
  };
  return (
    <div className="text-center py-20 bg-red-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Still Need our Help?</h2>
        <div className="flex flex-col md:flex-row  justify-center gap-4">
          <button
            onClick={handleCallClick}
            className="bg-[#DA251C] text-white px-6 py-1.5 rounded-lg hover:shadow-md"
          >
            Call us
          </button>
          <button
            onClick={handleWhatsAppChat}
            className="border border-[#DA251C] text-[#DA251C] px-6 py-1.5 rounded-lg hover:shadow-md"
          >
            Write us on WhatsApp
          </button>
          <button
            onClick={sendEmail}
            className=" text-[#DA251C] py-1.5 rounded-lg hover:bg-red-100 hover:underline underline-offset-8"
          >
            Send an Email
          </button>
        </div>
      </div>
    </div>
  );
};

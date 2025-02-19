import { PartnerForm } from "../partner/PartnerForm";

export const ContactPage = () => {
  return (
    <div>
      <section
        className="py-32 mt-16  bg-cover bg-center relative flex items-center justify-center px-4 lg:px-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcgghkk7q/image/upload/v1738149739/edutech/Hero_Section_jppqti.png')",
        }}
      >
        <div className="relative text-center text-white flex flex-col items-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-lg text-center">
            Get in Touch With Us
          </h1>
          <p className="text-left md:text-center">
            Thanks for your interest in Studio3 Launchpad! Many questions about
            our courses and academic policies are answered on our FAQ page, so
            we encourage you to check there first to see if your inquiry has
            already been addressed.
          </p>
        </div>
      </section>
      <PartnerForm />
    </div>
  );
};

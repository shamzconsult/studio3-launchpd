import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { YTVideo } from "@/components/atoms/Video";

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-4 md:mb-12 ">
        <h1 className="text-[20px] md:text-3xl font-bold">Testimonial</h1>
      </div>

      <div className="mb-12">
        <YTVideo ytVideoId="NSAOrGb9orM" />
      </div>
      <TestimonialCard />
    </section>
  );
};

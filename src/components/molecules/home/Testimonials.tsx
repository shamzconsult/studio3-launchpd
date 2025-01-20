import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { YTVideo } from "@/components/atoms/Video";

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Testimonial</h2>
      </div>

      <div className="mb-12">
        <YTVideo ytVideoId="NSAOrGb9orM" />
      </div>
      <TestimonialCard />
    </section>
  );
};

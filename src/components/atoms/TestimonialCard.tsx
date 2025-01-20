import { testimonials } from "@/const/testimonies";
import Image from "next/image";
import { useState } from "react";

interface TestimonialCardProps {
  title?: string;
}

export const TestimonialCard = ({ title = "" }: TestimonialCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const visibleTestimonials = showMore
    ? testimonials
    : testimonials.slice(0, 3);
  return (
    <div className="max-w-6xl mx-auto px-6">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm ">
            <p className="text-[#747474] mb-4">"{testimonial.message}"</p>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          className="text-[#DA251C]  hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More "}{" "}
          <span className="ml-1">{showMore ? "-" : "+"}</span>
        </button>
      </div>
    </div>
  );
};

"use client";

import { testimonials } from "@/const/testimonies";
import Image from "next/image";
import { useState } from "react";

interface TestimonialCardProps {
  title?: string;
}

export const TestimonialCard = ({ title = "" }: TestimonialCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleTestimonials = showMore
    ? testimonials
    : testimonials.slice(0, 3);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto lg:px-0">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      )}

      {/* Mobile Carousel View */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-6 border rounded-lg shadow-sm"
              >
                <p className="text-[#747474] mb-4">{testimonial.message}</p>
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
                    <p className="text-sm ">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Mobile Carousel Dot Navigation here */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => handleDotClick(dot)}
              className={`w-3 h-3 rounded-full border border-[#DA251C] transition-all ${
                currentSlide === dot ? "bg-[#DA251C]" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>

      {/*This is the Desktop View here */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm">
            <p className="text-[#747474] mb-4">{testimonial.message}</p>
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
                <p className="text-sm ">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 4 && (
        <div className="hidden md:block text-center mt-12">
          <button
            className="text-[#DA251C] hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More "}{" "}
            <span className="ml-1">{showMore ? "-" : "+"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

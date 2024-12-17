import React from "react";
import Image from "next/image";
import Testinomial from "@/app/Assets/Testinomial.jpg";

const testimonials = [
  {
    name: "Alamin Hasan",
    role: "Food Specialist",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
    rating: 4,
    image: Testinomial, // Use the imported image directly
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-yellow-400 italic text-lg">Testimonials</h3>
        <h2 className="text-4xl font-bold">What our client are saying</h2>
      </div>

      {/* Testimonial Card */}
      <div className="relative flex justify-center">
        <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-3xl relative">
          {/* Client Image */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="relative w-20 h-20">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Quote Icon */}
          <div className="text-center mt-6">
            <p className="text-yellow-500 text-3xl font-semibold">“</p>
          </div>

          {/* Testimonial Text */}
          <p className="text-center text-gray-600 mt-4">
            {testimonials[0].quote}
          </p>

          {/* Rating */}
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-2xl ${
                  index < testimonials[0].rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Client Info */}
          <div className="text-center mt-4">
            <h4 className="text-lg font-bold">{testimonials[0].name}</h4>
            <p className="text-gray-500">{testimonials[0].role}</p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6">
        <div className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;

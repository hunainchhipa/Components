import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Amazing experience! The best coworking spaces I've ever used.",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Great facilities and community. Highly recommended!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    feedback: "Flexible booking and excellent customer service. Loved it!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="testimonials-carousel flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3"
          >
            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

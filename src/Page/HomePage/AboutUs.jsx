import React from "react";
import aboutus from "./aboutus.jpg";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="w-full md:w-1/2">
          <img
            src={aboutus}
            alt="About Us"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            We provide the best service to help you find and book coworking
            spaces nearby. With just a few clicks, you can explore and reserve
            the perfect workspace for your needs.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check Out Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

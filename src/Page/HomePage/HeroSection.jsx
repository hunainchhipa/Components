import React from "react";
import heroImage from "./heroimage.jpg"; // Ensure the correct path to your image

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center mt-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4">
          Discover Your Perfect Workspace
        </h1>
        <p className="text-lg mb-8">
          Find and book the best coworking spaces near you with ease.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

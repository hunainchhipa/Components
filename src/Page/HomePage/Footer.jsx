import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="footer-nav mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-company text-center md:text-right">
          <h3 className="text-2xl font-bold mb-2">Tech Innovators</h3>
          <p className="text-gray-400">
            Leading platform for coworking space solutions. Connecting you to
            the best workspaces near you.
          </p>
          <p className="text-gray-500">
            &copy; 2024 Tech Innovators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Workspaces from "./Workspaces";
import CompanyTimeline from "./CompanyTimeline";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutUs />
        <Workspaces />
        <CompanyTimeline />
        <Blogs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

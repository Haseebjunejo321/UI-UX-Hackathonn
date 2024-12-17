import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-section";
import AboutSection from "./components/About";
import FoodCategorySection from "./components/FoodCategory";
import ClientSection from "./components/Client";
import MenuSection from "./components/Menu";
import ChefSection from "./components/Chefs";
import TestimonialSection from "./components/Testimonial";
import RestaurantCreativeProcess from "./components/Restrainedcreative";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FoodCategorySection />
      <ClientSection />
      <MenuSection />
      <ChefSection />
      <TestimonialSection />
      <RestaurantCreativeProcess />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;

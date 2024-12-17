import React from "react";
import Image from "next/image";
import Mainimg from "@/app/Assets/Herosection.jpg"

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-black text-white px-6 lg:px-16 py-12 lg:py-20">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h3 className="text-yellow-400 text-xl italic mb-4">So Quick & Amazing!</h3>
        <h1 className="text-5xl font-bold mb-4">
          The <span className="text-yellow-400">Art</span> of Speed Food Quality
        </h1>
        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition duration-300">
          See Menu
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative flex justify-center">
        {/* Main Image */}
        <Image
          src={Mainimg}
          alt="Food"
          className="rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
        />

        {/* Rotating Icons */}
        
      </div>
    </div>
  );
};

export default HeroSection;

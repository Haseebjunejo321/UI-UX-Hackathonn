import React from "react";
import Image from "next/image";
import Video from "@/app/Assets/Video.jpg";

const RestaurantCreativeProcess = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[558px] flex items-center justify-end"
      style={{ backgroundImage: `url(${Video.src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-7xl px-6 lg:px-12 flex justify-end">
        <div className="max-w-lg text-right">
          {/* Sub-heading */}
          <h3 className="text-yellow-400 italic text-lg mb-4">
            Restaurant Active Process
          </h3>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug mb-6">
            <span className="text-yellow-500">We</span> Document Every Food Bean Process <br />
            until it is saved
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Ut ac augue urna.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition duration-300">
              Read More
            </button>

            <button className="flex items-center px-4 py-2 space-x-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
              <span className="text-xl">▶</span>
              <span>Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCreativeProcess;

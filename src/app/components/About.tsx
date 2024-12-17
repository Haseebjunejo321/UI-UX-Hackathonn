import React from "react";
import Image from "next/image";
import Pic1 from "@/app/Assets/About1.jpg"
import Pic2 from "@/app/Assets/About2.jpg"
import Pic3 from "@/app/Assets/About3.jpg"

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white px-6 lg:px-16 py-12 gap-8">
      {/* Left Side: Text Content */}
      <div className="lg:w-1/2">
        <h3 className="text-yellow-400 italic mb-2">About us</h3>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-yellow-400">We</span> Create the best foody product
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
          dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          Ultrices mattis sed vitae mus risus.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-yellow-400 mr-3">✔</span>
            <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 mr-3">✔</span>
            <p>Quisque diam pellentesque bibendum non dui volutpat fringilla.</p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 mr-3">✔</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition duration-300">
          Read More
        </button>
      </div>

      {/* Right Side: Images */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <div>
          <Image
            src={Pic1}
            alt="Food 1"
            className="w-[660px] h-[330px] rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={Pic2}
            alt="Food 2"
            className="w-full h-[194px] rounded-lg shadow-lg"
          />
          <Image
            src={Pic3}
            alt="Food 3"
            className="w-full h-[194px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

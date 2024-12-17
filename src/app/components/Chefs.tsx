import React from "react";
import Image from "next/image";
import Chef1 from "@/app/Assets/chef1.jpg";
import Chef2 from "@/app/Assets/chef2.jpg";
import Chef3 from "@/app/Assets/chef3.jpg";
import Chef4 from "@/app/Assets/chef4.jpg";

const chefs = [
  { name: "D. Estwood", role: "Chief Chef", image: Chef1 },
  { name: "D. Scoriesh", role: "Assistant Chef", image: Chef2 },
  { name: "M. William", role: "Advertising Chef", image: Chef3 },
  { name: "W. Readfroad", role: "Chef", image: Chef4 },
];

const ChefSection = () => {
  return (
    <section className="bg-black text-white py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-yellow-400 italic text-lg">Chefs</h3>
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-500">Meet</span> Our Chef
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-[1200px] mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-lg w-full sm:w-[250px] md:w-[300px] hover:scale-105 transition-transform duration-300"
          >
            {/* Optimized Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={chef.image}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Chef Details */}
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold">{chef.name}</h4>
              <p className="text-gray-500">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition">
          See More
        </button>
      </div>
    </section>
  );
};

export default ChefSection;

import React from "react";
import Image from "next/image";
import Restaurant from "@/app/Assets/Restaurantimage.jpg";

const ClientSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[469px] flex justify-center items-center"
      style={{ backgroundImage: `url(${Restaurant.src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 py-12 px-6">
        {/* Professional Chefs */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">Professional Chefs</h3>
          <p className="text-4xl font-bold mt-2">420</p>
        </div>

        {/* Items of Food */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">Items Of Food</h3>
          <p className="text-4xl font-bold mt-2">320</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">Years Of Experience</h3>
          <p className="text-4xl font-bold mt-2">30+</p>
        </div>

        {/* Happy Customers */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">Happy Customers</h3>
          <p className="text-4xl font-bold mt-2">220</p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;

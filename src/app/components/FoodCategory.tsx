import React from "react";
import Image from "next/image";
import MenuC1 from "@/app/Assets/Menu1.jpg";
import MenuC2 from "@/app/Assets/Menu2jpg.jpg";
import MenuC3 from "@/app/Assets/Menu3.jpg";
import MenuC4 from "@/app/Assets/Menu4.jpg";
import MenuC5 from "@/app/Assets/Menu5.jpg";
import MenuC6 from "@/app/Assets/Menu6.jpg";
import MenuC7 from "@/app/Assets/Menu7.jpg";
import MenuC8 from "@/app/Assets/Menu8.jpg";

const FoodCategorySection = () => {
  const foodItems = [
    { src: MenuC1, label: "Save 30%", tag: "Sea Food" },
    { src: MenuC2, label: "Delicious", tag: "Fast Food" },
    { src: MenuC3, label: "Special Offer", tag: "Chef's Special" },
    { src: MenuC4, label: "New Dish", tag: "Tasty Treat" },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 lg:px-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-yellow-400 italic text-lg mb-2">Food Category</h3>
        <h1 className="text-4xl font-bold">
          Choose <span className="text-yellow-400">Food Item</span>
        </h1>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {foodItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Use next/image for optimization */}
            <Image
              src={item.src}
              alt={item.tag || "Food Item"}
              className="w-[305px] h-[280px] rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            {item.label && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
                {item.label}
              </div>
            )}
            {item.tag && (
              <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
                {item.tag}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Food Grid */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2">
          {[MenuC5, MenuC6, MenuC7, MenuC8].map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Food ${index + 1}`}
              className="w-[305px] h-[300px] rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Right Side: Text and Icons */}
        <div className="lg:w-1/2">
          <h3 className="text-yellow-400 italic mb-2">Why Choose us</h3>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-yellow-400">Ex</span>traordinary taste <br />
            And Experienced
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          {/* Icons */}
          <div className="flex gap-8 mb-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black p-4 rounded-lg mb-2">
                🍔
              </div>
              <p className="font-semibold">Fast Food</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black p-4 rounded-lg mb-2">
                🍽️
              </div>
              <p className="font-semibold">Lunch</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-black p-4 rounded-lg mb-2">
                🍲
              </div>
              <p className="font-semibold">Dinner</p>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block font-bold">
            30+ <span className="text-gray-800 font-normal">Years of</span>{" "}
            Experienced
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategorySection;

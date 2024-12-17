import React from "react";
import Image from "next/image";
import Mainimage from "@/app/Assets/MenuItemmain.jpg";
import MenuI1 from "@/app/Assets/MenuI1.jpg";
import MenuI2 from "@/app/Assets/MenuI2.jpg";
import MenuI3 from "@/app/Assets/MenuI3.jpg";
import MenuI4 from "@/app/Assets/MenuI4.jpg";
import MenuI5 from "@/app/Assets/MenuI5.jpg";
import MenuI6 from "@/app/Assets/MenuI6.jpg";
import MenuI7 from "@/app/Assets/MenuI7.jpg";
import MenuI8 from "@/app/Assets/MenuI8.jpg";

const MenuSection = () => {
  const menuItems = [
    { name: "Lettuce Leaf", price: "12.55", image: MenuI1 },
    { name: "Fresh Breakfast", price: "14.55", image: MenuI2 },
    { name: "Mild Butter", price: "12.55", image: MenuI3 },
    { name: "Fresh Bread", price: "12.55", image: MenuI4 },
    { name: "Glow Cheese", price: "12.55", image: MenuI5 },
    { name: "Italian Pizza", price: "12.55", image: MenuI6 },
    { name: "Slice Beef", price: "12.55", image: MenuI7 },
    { name: "Mushroom Pizza", price: "12.55", image: MenuI8 },
  ];

  return (
    <section className="bg-black text-white py-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-yellow-400 italic text-lg">Choose & Pick</h3>
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-500">From</span> Our Menu
        </h2>
      </div>

      {/* Categories */}
      <div className="flex justify-center mb-8 space-x-8 text-gray-400">
        <p className="text-yellow-500 font-bold cursor-pointer">Breakfast</p>
        <p className="hover:text-yellow-500 cursor-pointer">Lunch</p>
        <p className="hover:text-yellow-500 cursor-pointer">Dinner</p>
        <p className="hover:text-yellow-500 cursor-pointer">Dessert</p>
        <p className="hover:text-yellow-500 cursor-pointer">Drink</p>
        <p className="hover:text-yellow-500 cursor-pointer">Snack</p>
        <p className="hover:text-yellow-500 cursor-pointer">Soups</p>
      </div>

      {/* Menu Container */}
      <div className="relative flex justify-between items-start max-w-[1200px] mx-auto">
        {/* Left Side - Plate Image */}
        <div className="w-[30%] hidden md:block">
          <Image
            src={Mainimage}
            alt="Decorative Plate"
            className="rounded-full object-cover"
            width={300}
            height={300}
          />
        </div>

        {/* Right Side - Menu Items */}
        <div className="w-[65%] grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  Lorem nisi, ad et dapibus velit in consequat.
                </p>
                <p className="text-yellow-400 text-lg font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

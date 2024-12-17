import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <div className="text-2xl font-bold">Foodluck</div>
      <ul className="flex gap-6">
        {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
          <li key={item} className="cursor-pointer hover:text-yellow-400">
            {item}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
    </nav>
  );
};

export default Navbar;

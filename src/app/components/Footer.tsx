import React from "react";
import Image from "next/image";
import Footer1 from "@/app/Assets/Footer1.jpg"
import Footer2 from "@/app/Assets/footer2.jpg"
import Footer3 from "@/app/Assets/Footer3.jpg"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold">
              <span className="text-yellow-500">Still</span> You Need Our Support ?
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Don't wait make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-500 outline-none w-72"
            />
            <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-600 transition-all duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 mb-8" />

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us.</h3>
            <p className="text-gray-400 text-sm mb-4">
              Corporate clients and leisure travelers have been relying on GroundLink for dependable
              safe, and professional chauffeured car service in major cities across World.
            </p>
            <div className="flex items-center bg-yellow-500 text-black rounded-md p-2 w-fit">
              <i className="fas fa-clock text-2xl mr-3"></i>
              <div>
                <p className="text-sm font-semibold">Opening Hours</p>
                <p className="text-xs">Mon - Sat 10:00 - 6:00</p>
                <p className="text-xs">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help?</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>FAQ</li>
              <li>Term & conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex items-center">
                <Image className="w-12 h-12 rounded-md mr-3 object-cover" src={Footer1} alt='Post' />
                  
                  
                
                <div>
                  <p className="text-yellow-500 text-xs">20 Feb 2022</p>
                  <p className="text-sm text-gray-300">Keep Your Business</p>
                </div>
              </div>
              {/* Post 2 */}
              <div className="flex items-center">
                <Image
                  src={Footer2} // Replace with your image path
                  alt="Post"
                  className="w-12 h-12 rounded-md mr-3 object-cover"
                />
                <div>
                  <p className="text-yellow-500 text-xs">20 Feb 2022</p>
                  <p className="text-sm text-gray-300">Keep Your Business</p>
                </div>
              </div>
              {/* Post 3 */}
              <div className="flex items-center">
                <Image
                  src={Footer3} // Replace with your image path
                  alt="Post"
                  className="w-12 h-12 rounded-md mr-3 object-cover"
                />
                <div>
                  <p className="text-yellow-500 text-xs">20 Feb 2022</p>
                  <p className="text-sm text-gray-300">Keep Your Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-gray-400 text-sm">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <i className="fab fa-facebook cursor-pointer hover:text-yellow-500"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-yellow-500"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-yellow-500"></i>
            <i className="fab fa-pinterest cursor-pointer hover:text-yellow-500"></i>
            <i className="fab fa-youtube cursor-pointer hover:text-yellow-500"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

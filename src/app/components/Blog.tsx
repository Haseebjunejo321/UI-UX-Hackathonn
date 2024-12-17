import React from "react";
import Image from "next/image";
import Blog1 from "@/app/Assets/Blog1.jpg"
import Blog2 from "@/app/Assets/Blog2.jpg"
import Blog3 from "@/app/Assets/Blog3.jpg"

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: Blog1, // Replace with your image path
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      link: "#",
    },
    {
      id: 2,
      image: Blog2, // Replace with your image path
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      link: "#",
    },
    {
      id: 3,
      image: Blog3, // Replace with your image path
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
      link: "#",
    },
  ];

  return (
    <section className="bg-black py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-yellow-400 italic text-lg">Blog Post</h3>
        <h2 className="text-4xl text-white font-bold">
          <span className="text-yellow-500">L</span>atest News & Blog
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-black border border-gray-800 hover:border-yellow-500 transition-all duration-300 rounded-lg overflow-hidden shadow-md"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <p className="text-yellow-500 text-sm font-medium mb-3">
                {post.date}
              </p>
              <h3 className="text-white font-semibold text-lg leading-tight mb-4">
                {post.title}
              </h3>
              <div className="flex items-center justify-between">
                {/* Learn More */}
                <a
                  href={post.link}
                  className="text-yellow-500 text-sm font-semibold hover:underline"
                >
                  Learn More
                </a>

                {/* Icons */}
                <div className="flex space-x-4 text-gray-500 group-hover:text-yellow-500">
                  <span className="cursor-pointer hover:text-yellow-500 transition-all">
                    <i className="fas fa-heart"></i>
                  </span>
                  <span className="cursor-pointer hover:text-yellow-500 transition-all">
                    <i className="fas fa-share"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

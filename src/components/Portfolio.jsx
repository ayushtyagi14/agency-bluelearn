import React, { useState } from "react";

const Portfolio = () => {
  const imageUrls = [
    `https://picsum.photos/800/600?random=${Math.random()}`,
    `https://picsum.photos/800/600?random=${Math.random()}`,
    `https://picsum.photos/800/600?random=${Math.random()}`,
    `https://picsum.photos/800/600?random=${Math.random()}`,
    `https://picsum.photos/800/600?random=${Math.random()}`,
    `https://picsum.photos/800/600?random=${Math.random()}`,
  ];

  const [portfolioItems, setPortfolioItems] = useState([
    {
      type: "Creative",
      name: "Portfolio Item 1",
      img: imageUrls[0],
      desc: "Some details about the portfolio item can go here.",
    },
    {
      type: "Emails",
      name: "Portfolio Item 2",
      img: imageUrls[1],
      desc: "Some details about the portfolio item can go here.",
    },
    {
      type: "Landing Pages",
      name: "Portfolio Item 3",
      img: imageUrls[2],
      desc: "Some details about the portfolio item can go here.",
    },
    {
      type: "Creative",
      name: "Portfolio Item 4",
      img: imageUrls[3],
      desc: "Some details about the portfolio item can go here.",
    },
    {
      type: "Emails",
      name: "Portfolio Item 5",
      img: imageUrls[4],
      desc: "Some details about the portfolio item can go here.",
    },
    {
      type: "Landing Pages",
      name: "Portfolio Item 6",
      img: imageUrls[5],
      desc: "Some details about the portfolio item can go here.",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter);

  return (
    <div className="bg-gray-100 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Portfolio
          </h2>
          <p className="mt-2 md:text-[28px] text-[24px] leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Here's a selection of our work
          </p>
          <div className="flex flex-row md:w-[35%] justify-between mt-5 mx-auto">
            <button
              className={`border md:px-3 px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-100 ${
                activeFilter === "All" && "bg-blue-500 text-gray-400"
              }`}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
            <button
              className={`border md:px-3 px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-100 ${
                activeFilter === "Creative" && "bg-blue-500 text-gray-400"
              }`}
              onClick={() => handleFilterClick("Creative")}
            >
              Creative
            </button>
            <button
              className={`border md:px-3 px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-100 ${
                activeFilter === "Emails" && "bg-blue-500 text-gray-400"
              }`}
              onClick={() => handleFilterClick("Emails")}
            >
              Emails
            </button>
            <button
              className={`border md:px-3 px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-100 ${
                activeFilter === "Landing Pages" && "bg-blue-500 text-gray-400"
              }`}
              onClick={() => handleFilterClick("Landing Pages")}
            >
              Landing Pages
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {filteredItems.map((item, index) => (
            <div
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
              key={index}
            >
              <img
                className="w-full h-48 object-cover object-center hover:transform hover:scale-105 hover:ease-in-out"
                src={item.img}
                alt={item.name}
              />
              <div className="px-4 py-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [width, setWidth] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <nav className="bg-white px-4 py-5 flex justify-between items-center fixed w-full z-[999]">
        {width < 1000 && (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="https://img.icons8.com/fluency-systems-filled/30/null/menu.png" />
          </button>
        )}
        <div className="flex flex-row items-center">
          <img src="/logo.jpg" alt="Logo" className="w-12" />
          <a href="/" className="text-black font-bold text-xl">
            BlueLearn
          </a>
        </div>
        {width > 1000 && (
          <>
            <div className="flex flex-row justify-between">
              <a href="#addReview" className="text-black px-3 py-2">
                Write a Review
              </a>
              <div className="relative">
                <button
                  className="text-black px-3 py-2"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Agencies
                </button>
                {dropdown && (
                  <div className="absolute top-10 rounded-md w-40 py-2 text-black bg-white">
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 1
                    </a>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 2
                    </a>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 3
                    </a>
                  </div>
                )}
              </div>
              <a href="/" className="text-black px-3 py-2">
                Apply for Listing
              </a>
            </div>
            <form className="flex">
              <input
                type="text"
                className="rounded-l-md px-4 py-2 w-60 border border-r-0 focus:outline-none focus:border-gray-200"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="bg-gray-100 border-black text-black px-4 py-2 rounded-r-md"
              >
                Search
              </button>
            </form>
          </>
        )}
      </nav>
      {menuOpen && (
        <>
          <div className="h-max flex flex-col md:px-10 px-5 pt-16 text-white">
            <div className="flex flex-col justify-between">
              <a href="#addReview" className="text-black px-3 py-2">
                Write a Review
              </a>
              <div className="relative">
                <button
                  className="text-black px-3 py-2"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Agencies
                </button>
                {dropdown && (
                  <div className="rounded-md w-40 text-black bg-white">
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 1
                    </a>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 2
                    </a>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                      XYZ Category 3
                    </a>
                  </div>
                )}
              </div>
              <a href="/" className="text-black px-3 py-2">
                Apply for Listing
              </a>
            </div>
            <form className="flex">
              <input
                type="text"
                className="rounded-l-md px-4 py-2 w-60 border border-r-0 focus:outline-none focus:border-gray-200"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="bg-gray-100 border-black text-black px-4 py-2 rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

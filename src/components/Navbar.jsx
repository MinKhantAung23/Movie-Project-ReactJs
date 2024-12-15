/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaBookBookmark, FaBookmark, FaHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useGetMoviesBySearchQuery } from "../services/endpoints/movieEndpoints";
import MovieLogo from "../assets/watch-movie.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { data: searchResults } = useGetMoviesBySearchQuery(query);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-extrabold">
            <Link to={"/"} className="flex items-center gap-2">
              <img
                src={MovieLogo}
                className="size-7 animate-bounce"
                alt="TheMovie's Logo"
              />
              TheMovies
            </Link>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-6 text-white">
            <Link
              to={"/favorite"}
              className="hover:text-yellow-400 transition duration-300"
            >
              <FaHeart size={24} />
            </Link>
            <Link
              to={"/bookmark"}
              className="hover:text-yellow-400 transition duration-300"
            >
              <FaBookmark size={24} />
            </Link>
            <button
              onClick={toggleSearch}
              className="hover:text-yellow-400 transition duration-300"
            >
              <FaSearch size={24} />
            </button>
          </div>
          <button
            onClick={handleToggle}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <MdClose /> : <FaBars />}
          </button>
        </div>

        <motion.div
          transition={{ duration: 0.3 }}
          className="lg:flex lg:items-center lg:space-x-6 hidden mt-1"
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-white px-4 py-2 rounded-md transition duration-300 ${
                isActive ? "bg-purple-700" : "hover:bg-purple-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) =>
              `text-white px-4 py-2 rounded-md transition duration-300 ${
                isActive ? "bg-purple-700" : "hover:bg-purple-500"
              }`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to={"/series"}
            className={({ isActive }) =>
              `text-white px-4 py-2 rounded-md transition duration-300 ${
                isActive ? "bg-purple-700" : "hover:bg-purple-500"
              }`
            }
          >
            Series
          </NavLink>
          <NavLink
            to={"/about-us"}
            className={({ isActive }) =>
              `text-white px-4 py-2 rounded-md transition duration-300 ${
                isActive ? "bg-purple-700" : "hover:bg-purple-500"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              `text-white px-4 py-2 rounded-md transition duration-300 ${
                isActive ? "bg-purple-700" : "hover:bg-purple-500"
              }`
            }
          >
            Contact Us
          </NavLink>
        </motion.div>
      </nav>

      {/* Mobile Navbar */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-purple-600 mt-2"
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `block text-white px-4 py-2 rounded-md ${
                isActive ? "bg-purple-700" : "hover:bg-purple-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) =>
              `block text-white px-4 py-2 rounded-md ${
                isActive ? "bg-purple-700" : "hover:bg-purple-700"
              }`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to={"/series"}
            className={({ isActive }) =>
              `block text-white px-4 py-2 rounded-md ${
                isActive ? "bg-purple-700" : "hover:bg-purple-700"
              }`
            }
          >
            Series
          </NavLink>
          <NavLink
            to={"/about-us"}
            className={({ isActive }) =>
              `block text-white px-4 py-2 rounded-md ${
                isActive ? "bg-purple-700" : "hover:bg-purple-700"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              `block text-white px-4 py-2 rounded-md ${
                isActive ? "bg-purple-700" : "hover:bg-purple-700"
              }`
            }
          >
            Contact Us
          </NavLink>
        </motion.div>
      )}

      {searchOpen && (
        <div className="bg-purple-900 p-4 transform transition-transform duration-300">
          <div className="container mx-auto">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for movies..."
                className="w-full px-4 py-2 border border-r-0 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-4 py-2 rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

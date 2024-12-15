/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MovieLogo from "../../../assets/watch-movie.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-8 antialiased mt-auto"
    >
      <div className="container mx-auto max-w-screen-xl px-4 2xl:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={MovieLogo} alt="TheMovies Logo" className="w-10" />
            <h2 className="text-3xl font-extrabold">TheMovies</h2>
          </div>
          <p className="text-gray-300 mt-2">
            Explore a universe of movies and series. Discover, bookmark, and
            enjoy your favorites.
          </p>
          <p className="text-gray-400 mt-4">
            &copy; {year} TheMovies. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col space-y-2 lg:space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <Link
            to="/"
            className="hover:text-indigo-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-indigo-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-indigo-300 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/MinKhantAung23"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.298 3.438 9.798 8.207 11.385.6.112.793-.26.793-.577 0-.286-.01-1.044-.016-2.05-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.808 1.305 3.492.997.108-.774.419-1.305.762-1.606-2.665-.306-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.22-.124-.305-.535-1.532.117-3.194 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.004-.405 1.02.006 2.047.139 3.004.405 2.29-1.553 3.298-1.23 3.298-1.23.653 1.662.242 2.89.118 3.194.768.839 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.476 5.92.43.372.823 1.103.823 2.22 0 1.606-.014 2.903-.014 3.293 0 .32.192.694.8.577 4.767-1.59 8.204-6.09 8.204-11.385C24 5.873 18.627.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/in/MinKhantAung"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.837v-3.622h2.983V8.413c0-2.953 1.801-4.561 4.429-4.561 1.26 0 2.343.094 2.657.136v3.08l-1.823.001c-1.431 0-1.708.679-1.708 1.676v2.198h3.417l-.446 3.622h-2.971V24h5.816c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

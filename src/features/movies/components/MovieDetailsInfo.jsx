/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaBookBookmark, FaPlay } from "react-icons/fa6";
import { addFavorite } from "../../../store/features/favoritesSlice";
import { addBookmark } from "../../../store/features/bookmarkSlice";
import Trailers from "../../../components/Trailers";
import { toast } from "react-toastify";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/Breadcrumb";

const MovieDetailsInfo = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const bookmark = useSelector((state) => state.bookmarks.bookmarks);

  const minuteToHours = () => {
    const hours = Math.floor(movie?.runtime / 60);
    const minutes = movie?.runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const isFavorite = (movie) => {
    return favorites.find((item) => item.id === movie?.id);
  };

  const isBookmark = (movie) => {
    return bookmark.find((item) => item.id === movie?.id);
  };

  const handleFavorite = (movie) => {
    toast.success("Added to favorite movie successfully!", {
      position: "top-center",
    });
    dispatch(addFavorite(movie));
  };

  const handleBookmark = (movie) => {
    toast.success("Added to bookmark movie successfully!", {
      position: "top-center",
    });
    dispatch(addBookmark(movie));
  };
  return (
    <Container className="relative z-10 container mx-auto px-4  text-white">
      <BreadCrumb
        currentPageTitle={movie?.title}
        links={[{ title: "Movies", path: "/movies" }]}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row py-4 items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8"
      >
        <motion.img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
          className="w-64 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />

        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-start">
            {movie?.title}
          </h1>
          <p className="text-gray-400 text-base">
            Release Date: {movie?.release_date} (
            {movie?.origin_country?.map((c) => c)})
          </p>
          {movie?.genres?.map((genre) => genre.name).join(", ")}
          <span className="text-gray-300">runtime: {minuteToHours()}</span>
          <div className="flex items-center space-x-2">
            <FaStar className="fill-yellow-400 size-5" />
            <span className="text-yellow-400 font-bold">
              {movie?.vote_average}
            </span>
            <span className="text-gray-400">/ 10</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleFavorite(movie)}
              className={`${
                isFavorite(movie) ? "text-red-500" : ""
              }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
            >
              <FaHeart />
            </button>
            <button
              onClick={() => handleBookmark(movie)}
              className={`${
                isBookmark(movie) ? "text-red-500" : ""
              }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
            >
              <FaBookBookmark />
            </button>
            <Trailers trailerId={movie.id} isMovie={true} />
          </div>
          <p className="text-gray-400 text-lg font-semibold">
            {movie?.tagline}
          </p>
          <h3 className="text-gray-100 text-xl font-semibold">Overview</h3>
          <p className="text-gray-300">{movie?.overview}</p>
        </div>
      </motion.div>
    </Container>
  );
};

export default MovieDetailsInfo;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { removeFavorite } from "../../../store/features/favoritesSlice";
import DeleteConfirm from "../../../components/DeleteConfirm";
import NoFavorite from "../../../assets/leaf.png";

const FavouritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const handleRemoveFavorite = (e, movie) => {
    e.stopPropagation();
    dispatch(removeFavorite(movie.id));
  };

  const handleNavigate = (movie) => {
    if (movie.title) {
      navigate(`/movies/${movie.id}`);
    } else if (movie.name) {
      navigate(`/series/${movie.id}`);
    }
  };
  return (
    <div className=" min-h-screen  px-6 py-12">
      {favoriteMovies.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-6 h-80">
          <img src={NoFavorite} alt="No Bookmarks" className="w-40 h-40" />
          <p className="text-2xl font-semibold text-gray-600">
            You don't have any favorite movies yet.
          </p>
          <Link
            to="/movies"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Favorite Movies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favoriteMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="bg-gradient-to-r from-white to-blue-500 rounded-xl shadow-lg hover:shadow-xl overflow-hidden transform transition duration-300"
                whileHover={{ scale: 1.03 }}
                onClick={() => handleNavigate(movie)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 flex flex-col items-center text-center">
                  <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                    {movie.title || movie.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {movie.title ? "Movie" : "Series"}
                  </p>
                  <div className="mt-4">
                    <DeleteConfirm movie={movie} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavouritePage;

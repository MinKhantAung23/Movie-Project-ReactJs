/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetMoviesBySearchQuery } from "../../../services/endpoints/movieEndpoints";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import Grid from "../../../components/Grid";

const SearchPage = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const query = search.get("query");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const {
    data: searchMovies,
    error,
    isLoading,
    isFetching,
  } = useGetMoviesBySearchQuery({ query, page });

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    if (searchMovies && searchMovies?.results) {
      setMovies((prevMovies) => [...prevMovies, ...searchMovies.results]);
    }
  }, [searchMovies]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleNavigate = (movie) => {
    if (movie.media_type === "movie") {
      navigate(`/movies/${movie.id}`);
    } else {
      navigate(`/series/${movie.id}`);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Search Results for: {query}
      </h1>
      {isLoading && (
        <Grid>
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </Grid>
      )}
      {error && <AlertDestructive errorMessage={error.message} />}
      {movies && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-100 hover:shadow-lg"
              onClick={() => handleNavigate(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {movie.title || movie.name}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {movie.overview}
                </p>
                <span className="text-sm text-gray-500">
                  Release Date: {movie.release_date || movie.first_air_date}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchMovies?.page < searchMovies?.total_pages && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

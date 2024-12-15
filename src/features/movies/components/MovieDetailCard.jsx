/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import MovieDetailsInfo from "./MovieDetailsInfo";
import MovieDetailStatus from "./MovieDetailStatus";
import MovieDetailCasts from "./MovieDetailCasts";
import MovieDetailRecommendations from "./MovieDetailRecommendations";

const MovieDetailCard = ({ movie, cast, recommendations }) => {
  return (
    <div>
      <div className="relative min-h-screen bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-screen object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        {/* Movie Info */}
        <MovieDetailsInfo movie={movie} />
      </div>
      <MovieDetailStatus movie={movie} />

      {/* Cast */}
      <MovieDetailCasts cast={cast} />
      {/* Recommendations */}
      <MovieDetailRecommendations recommendations={recommendations} />
    </div>
  );
};

export default MovieDetailCard;

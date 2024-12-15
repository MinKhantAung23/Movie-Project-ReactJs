/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SeriesDetailCasts from "./SeriesDetailCasts";
import SeriesDetailRecommendations from "./SeriesDetailRecommendations";
import SeriesDetailStatus from "./SeriesDetailStatus";
import SeriesDetailsInfo from "./SeriesDetailsInfo";

const SeriesDetailCard = ({ series, cast, recommendations }) => {
  return (
    <div>
      <div className="relative min-h-screen bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original/${series?.backdrop_path}`}
            alt={series?.title}
            className="w-full h-screen object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* series Info */}
        <SeriesDetailsInfo series={series} />
      </div>
      <SeriesDetailStatus series={series} />
      {/* Cast */}
      <SeriesDetailCasts cast={cast} />

      {/* Recommendations */}
      <SeriesDetailRecommendations recommendations={recommendations} />
    </div>
  );
};

export default SeriesDetailCard;

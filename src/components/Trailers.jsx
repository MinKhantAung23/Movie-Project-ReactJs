/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import TrailerModal from "./TrailerModal";
import { useGetMovieTrailerQuery } from "../services/endpoints/movieEndpoints";
import { useGetSeriesTrailersByIdQuery } from "../services/endpoints/seriesEndpoint";

const Trailers = ({ trailerId, isMovie }) => {
  const {
    data: movie,
    error: movieError,
    isLoading: movieLoading,
  } = useGetMovieTrailerQuery(trailerId);
  const {
    data: series,
    error: seriesError,
    isLoading: seriesLoading,
  } = useGetSeriesTrailersByIdQuery(trailerId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState(null);

  const trailer = isMovie
    ? movie?.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      )
    : series?.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

  const handlePlayTrailer = (trailerKey) => {
    setCurrentTrailer(trailerKey);
    setIsModalOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsModalOpen(false);
    setCurrentTrailer(null);
  };

  if (movieLoading && seriesLoading) return <div>Loading...</div>;
  if (movieError && seriesError) return <div>Error fetching trailers</div>;

  return (
    <div>
      {trailer ? (
        <div>
          <button
            onClick={() => handlePlayTrailer(trailer.key)}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80"
          >
            <FaPlay />
            <span>play trailer</span>
          </button>
        </div>
      ) : (
        <div>No trailer available.</div>
      )}

      {isModalOpen && currentTrailer && (
        <TrailerModal videoKey={currentTrailer} onClose={handleCloseTrailer} />
      )}
    </div>
  );
};

export default Trailers;

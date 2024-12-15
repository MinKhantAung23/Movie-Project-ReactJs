import { useEffect, useState } from "react";
import { usePopularMoviesQuery } from "../../../services/endpoints/movieEndpoints";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../../components/SkeletonLoader";

const HeroSection = () => {
  const [movie, setMovie] = useState(null);

  const { data, isLoading, error } = usePopularMoviesQuery();

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const movies = data?.results;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonLoader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div
      className="relative w-full h-[500px] mt-2 bg-cover bg-center text-white rounded-lg shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold">{movie?.title}</h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300 line-clamp-3">
          {movie?.overview}
        </p>
        <div className="mt-6 flex space-x-4">
          <Link
            to={`https://www.themoviedb.org/movie/${movie?.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium"
          >
            Watch Now
          </Link>
          <Link
            to={`/movies/${movie?.id}`}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-medium"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

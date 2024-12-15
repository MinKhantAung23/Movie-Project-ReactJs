import React, { useState } from "react";
import { useTrendingMoviesQuery } from "../../../services/endpoints/movieEndpoints";
import MovieCard from "../components/MovieCard";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import MovieLabelDropdown from "../components/MovieLabelDropdown";
import Container from "../../../components/Container";
import Grid from "../../../components/Grid";
import BreadCrumb from "../../../components/Breadcrumb";

const TrendingMoviePage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const {
    data: trendingMovies,
    isLoading,
    isFetching,
    error,
  } = useTrendingMoviesQuery(page);

  React.useEffect(() => {
    if (trendingMovies && trendingMovies?.results) {
      setMovies((prevMovies) => [...prevMovies, ...trendingMovies.results]);
    }
  }, [trendingMovies]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return (
      <Grid>
        {Array.from({ length: 8 }).map((_, idx) => (
          <SkeletonLoader key={idx} />
        ))}
      </Grid>
    );
  }

  if (error) {
    return <AlertDestructive errorMessage={error.message} />;
  }
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Trending Movies"} />

      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Trending Movies</h1>
        <MovieLabelDropdown />
      </div>

      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </Grid>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {isFetching ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            "  Load More"
          )}
        </button>
      </div>
    </Container>
  );
};

export default TrendingMoviePage;

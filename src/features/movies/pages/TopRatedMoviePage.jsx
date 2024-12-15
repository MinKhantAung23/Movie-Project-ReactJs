import React, { useState } from "react";
import { useTopRatedMoviesQuery } from "../../../services/endpoints/movieEndpoints";
import Container from "../../../components/Container";
import MovieLabelDropdown from "../components/MovieLabelDropdown";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import MovieCard from "../components/MovieCard";
import BreadCrumb from "../../../components/Breadcrumb";

const TopRatedMoviePage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const {
    data: topRatedMovies,
    isLoading,
    isFetching,
    error,
  } = useTopRatedMoviesQuery(page);

  React.useEffect(() => {
    if (topRatedMovies && topRatedMovies?.results) {
      setMovies((prevMovies) => [...prevMovies, ...topRatedMovies.results]);
    }
  }, [topRatedMovies]);

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
      <BreadCrumb currentPageTitle={"Top Rated Movies"} />

      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Top Rated Movies</h1>
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
            "Load More "
          )}
        </button>
      </div>
    </Container>
  );
};

export default TopRatedMoviePage;

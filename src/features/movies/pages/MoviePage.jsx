/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import Grid from "../../../components/Grid";
import MovieCard from "../components/MovieCard";
import AlertDestructive from "../../../components/AlertDestructive";
import { useGetMoviesQuery } from "../../../services/endpoints/movieEndpoints";
import SkeletonLoader from "../../../components/SkeletonLoader";
import MovieLabelDropdown from "../components/MovieLabelDropdown";
import BreadCrumb from "../../../components/Breadcrumb";

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { data, isLoading, isFetching, error } = useGetMoviesQuery(page);

  useEffect(() => {
    if (data && data?.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data]);

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
      <BreadCrumb currentPageTitle={"Movies"} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Movies</h1>
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

export default MoviePage;

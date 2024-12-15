/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetMovieCastQuery,
  useGetMovieRecommendationsQuery,
  useGetMovieSimilarQuery,
} from "../../../services/endpoints/movieEndpoints";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import MovieDetailCard from "../components/MovieDetailCard";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieByIdQuery(id);
  const { data: cast } = useGetMovieCastQuery(id);
  const { data: recommendations } = useGetMovieRecommendationsQuery(id);

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader />
      ) : error ? (
        <AlertDestructive errorMessage={error.message} />
      ) : (
        <MovieDetailCard
          movie={data}
          cast={cast}
          recommendations={recommendations}
        />
      )}
    </div>
  );
};

export default MovieDetailPage;

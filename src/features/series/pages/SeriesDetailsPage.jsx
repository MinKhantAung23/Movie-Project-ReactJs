/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetSeriesByIdQuery,
  useGetSeriesCastsQuery,
  useGetSeriesRecommendationsQuery,
} from "../../../services/endpoints/seriesEndpoint";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import SeriesDetailCard from "../components/SeriesDetailCard";

const SeriesDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSeriesByIdQuery(id);
  const { data: cast } = useGetSeriesCastsQuery(id);
  const { data: recommendations } = useGetSeriesRecommendationsQuery(id);

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader />
      ) : error ? (
        <AlertDestructive errorMessage={error.message} />
      ) : (
        <SeriesDetailCard
          series={data}
          cast={cast}
          recommendations={recommendations}
        />
      )}
    </div>
  );
};

export default SeriesDetail;

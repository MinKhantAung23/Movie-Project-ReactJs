/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { usePopularSeriesQuery } from "../../../services/endpoints/seriesEndpoint";
import Container from "../../../components/Container";
import SeriesLabelDropdown from "../components/SeriesLabelDropdown";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import SeriesCard from "../components/SeriesCard";
import BreadCrumb from "../../../components/Breadcrumb";

const PopularSeriesPage = () => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const {
    data: popularSeries,
    isLoading,
    isFetching,
    error,
  } = usePopularSeriesQuery(page);

  useEffect(() => {
    if (popularSeries && popularSeries?.results) {
      setSeries((prevSeries) => [...prevSeries, ...popularSeries.results]);
    }
  }, [popularSeries]);

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
      <BreadCrumb currentPageTitle={"Popular Series"} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Popular Series</h1>
        <SeriesLabelDropdown />
      </div>

      <Grid>
        {series.map((ser) => (
          <SeriesCard key={ser.id} item={ser} />
        ))}
      </Grid>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      </div>
    </Container>
  );
};

export default PopularSeriesPage;

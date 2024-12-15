/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import SeriesLabelDropdown from "../components/SeriesLabelDropdown";
import { useGetSeriesQuery } from "../../../services/endpoints/seriesEndpoint";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import SeriesCard from "../components/SeriesCard";
import BreadCrumb from "../../../components/Breadcrumb";

const SeriesPage = () => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const { data, isLoading, error } = useGetSeriesQuery(page);

  useEffect(() => {
    if (data && data?.results) {
      setSeries((prevSeries) => [...prevSeries, ...data.results]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Container>
      <BreadCrumb currentPageTitle={"Series"} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Series</h1>
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
          Load More
        </button>
      </div>
    </Container>
  );
};

export default SeriesPage;

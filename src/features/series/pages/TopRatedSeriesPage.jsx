import React, { useState } from "react";
import { useTopRatedSeriesQuery } from "../../../services/endpoints/seriesEndpoint";
import Container from "../../../components/Container";
import SeriesLabelDropdown from "../components/SeriesLabelDropdown";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import AlertDestructive from "../../../components/AlertDestructive";
import SeriesCard from "../components/SeriesCard";
import BreadCrumb from "../../../components/Breadcrumb";

const TopRatedSeriesPage = () => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const {
    data: topRatedSeries,
    isLoading,
    isFetching,
    error,
  } = useTopRatedSeriesQuery(page);

  React.useEffect(() => {
    if (topRatedSeries && topRatedSeries?.results) {
      setSeries((prevSeries) => [...prevSeries, ...topRatedSeries.results]);
    }
  }, [topRatedSeries]);

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
      <BreadCrumb currentPageTitle={"Top Rated Series"} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">Top Rated Series</h1>
        <SeriesLabelDropdown />
      </div>

      <Grid>
        {series.map((item) => (
          <SeriesCard key={item.id} item={item} />
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

export default TopRatedSeriesPage;

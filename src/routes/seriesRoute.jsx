import { lazy } from "react";
import SeriesLayout from "../features/series/layout/SeriesLayout";

const SeriesPage = lazy(() => import("../features/series/pages/SeriesPage"));
const SeriesDetailsPage = lazy(() =>
  import("../features/series/pages/SeriesDetailsPage")
);
const TrendingSeriesPage = lazy(() =>
  import("../features/series/pages/TrendingSeriesPage")
);
const UpcomingSeriesPage = lazy(() =>
  import("../features/series/pages/UpcomingSeriesPage")
);
const PopularSeriesPage = lazy(() =>
  import("../features/series/pages/PopularSeriesPage")
);
const TopRatedSeriesPage = lazy(() =>
  import("../features/series/pages/TopRatedSeriesPage")
);
const NowPlayingSeriesPage = lazy(() =>
  import("../features/series/pages/NowPlayingSeriesPage")
);

const movieRoute = [
  {
    path: "/series",
    element: <SeriesLayout />,
    children: [
      {
        index: true,
        element: <SeriesPage />,
      },
      {
        path: ":id",
        element: <SeriesDetailsPage />,
      },
      {
        path: "trending",
        element: <TrendingSeriesPage />,
      },
      {
        path: "upcoming",
        element: <UpcomingSeriesPage />,
      },
      {
        path: "popular",
        element: <PopularSeriesPage />,
      },
      {
        path: "top-rated",
        element: <TopRatedSeriesPage />,
      },
      {
        path: "now-playing",
        element: <NowPlayingSeriesPage />,
      },
    ],
  },
];

export default movieRoute;

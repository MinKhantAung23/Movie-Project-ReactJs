import { lazy } from "react";
import MovieLayout from "../features/movies/layout/MovieLayout";

const MoviePage = lazy(() => import("../features/movies/pages/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("../features/movies/pages/MovieDetailsPage")
);
const TrendingMoviePage = lazy(() =>
  import("../features/movies/pages/TrendingMoviePage")
);
const UpcomingMoviePage = lazy(() =>
  import("../features/movies/pages/UpcomingMoviePage")
);
const PopularMoviePage = lazy(() =>
  import("../features/movies/pages/PopularMoviePage")
);
const TopRatedMoviePage = lazy(() =>
  import("../features/movies/pages/TopRatedMoviePage")
);
const NowPlayingMoviePage = lazy(() =>
  import("../features/movies/pages/NowPlayingMoviePage")
);

const movieRoute = [
  {
    path: "/movies",
    element: <MovieLayout />,
    children: [
      {
        index: true,
        element: <MoviePage />,
      },
      {
        path: ":id",
        element: <MovieDetailsPage />,
      },
      {
        path: "trending",
        element: <TrendingMoviePage />,
      },
      {
        path: "upcoming",
        element: <UpcomingMoviePage />,
      },
      {
        path: "popular",
        element: <PopularMoviePage />,
      },
      {
        path: "top-rated",
        element: <TopRatedMoviePage />,
      },
      {
        path: "now-playing",
        element: <NowPlayingMoviePage />,
      },
    ],
  },
];

export default movieRoute;

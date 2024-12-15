import { lazy } from "react";

const SearchPage = lazy(() => import("../features/search/pages/SearchPage"));

const searchRoute = [
  {
    path: "/search",
    element: <SearchPage />,
  },
];

export default searchRoute;

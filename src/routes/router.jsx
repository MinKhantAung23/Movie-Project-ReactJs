import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../features/layout/PublicLayout";
import publicRoute from "./publicRoute";
import NotFound from "../components/NotFound";
import movieRoute from "./movieRoute";
import seriesRoute from "./seriesRoute";
import favoriteRoute from "./favoriteRoute";
import bookmarkRoute from "./bookmarkRoute";
import searchRoute from "./searchRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      ...publicRoute,
      ...movieRoute,
      ...seriesRoute,
      ...favoriteRoute,
      ...bookmarkRoute,
      ...searchRoute,
    ],
  },
]);

export default router;

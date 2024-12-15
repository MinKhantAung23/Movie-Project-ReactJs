import { lazy } from "react";

const BookmarkPage = lazy(() =>
  import("../features/bookmark/pages/BookmarkPage")
);

const bookmarkRoute = [
  {
    path: "/bookmark",
    element: <BookmarkPage />,
  },
];

export default bookmarkRoute;

import { lazy } from "react";

const HomePage = lazy(() => import("../features/home/pages/HomePage"));
const AboutPage = lazy(() => import("../features/about-us/pages/AboutPage"));
const ContactPage = lazy(() =>
  import("../features/contact-us/pages/ContactPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
];

export default publicRoute;

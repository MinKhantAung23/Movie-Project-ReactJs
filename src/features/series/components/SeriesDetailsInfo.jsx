/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Trailers from "../../../components/Trailers";
import { addFavorite } from "../../../store/features/favoritesSlice";
import { addBookmark } from "../../../store/features/bookmarkSlice";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/Breadcrumb";

const SeriesDetailsInfo = ({ series }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const bookmark = useSelector((state) => state.bookmarks.bookmarks);
  const isFavorite = (series) => {
    return favorites.find((item) => item.id === series?.id);
  };

  const isBookmark = (series) => {
    return bookmark.find((item) => item.id === series?.id);
  };

  const handleFavorite = (series) => {
    toast.success("Added to favorite successfully!", {
      position: "top-center",
    });
    dispatch(addFavorite(series));
  };

  const handleBookmark = (series) => {
    toast.success("Added to bookmark successfully!", {
      position: "top-center",
    });
    dispatch(addBookmark(series));
  };

  return (
    <Container className="relative z-10 container mx-auto px-4 text-white">
      <BreadCrumb
        currentPageTitle={series?.name}
        links={[{ title: "Series", path: "/series" }]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row py-4 items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8"
      >
        <motion.img
          src={`https://image.tmdb.org/t/p/original/${series?.poster_path}`}
          alt={series?.title}
          className="w-64 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />

        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-start">
            {series?.name}
          </h1>
          <p className="text-gray-400 text-base">
            Release Date: {series?.first_air_date} (
            {series?.origin_country?.map((c) => c)})
          </p>
          {series?.genres.map((genre) => genre.name).join(", ")}
          <span className="text-gray-300">
            number of episodes: {series?.number_of_episodes}
          </span>
          <span className="text-gray-300">
            number of seasons: {series?.number_of_seasons}
          </span>
          <div className="flex items-center space-x-2">
            <FaStar className="fill-yellow-400 size-5" />
            <span className="text-yellow-400 font-bold">
              {series?.vote_average}
            </span>
            <span className="text-gray-400">/ 10</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleFavorite(series)}
              className={`${
                isFavorite(series) ? "text-red-500" : ""
              }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
            >
              <FaHeart />
            </button>
            <button
              onClick={() => handleBookmark(series)}
              className={`${
                isBookmark(series) ? "text-red-500" : ""
              }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
            >
              <FaBookBookmark />
            </button>
            <Trailers trailerId={series.id} />
          </div>
          <p className="text-gray-400 text-lg font-semibold">
            {series?.tagline}
          </p>
          <h3 className="text-gray-100 text-xl font-semibold">Overview</h3>
          <p className="text-gray-300">{series?.overview}</p>
        </div>
      </motion.div>
    </Container>
  );
};

export default SeriesDetailsInfo;

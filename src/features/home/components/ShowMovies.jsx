/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { FaHome, FaStar } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaBookBookmark, FaBookmark, FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import { addFavorite } from "../../../store/features/favoritesSlice";
import { addBookmark } from "../../../store/features/bookmarkSlice";
import AlertDestructive from "../../../components/AlertDestructive";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { useGetMoviesQuery } from "../../../services/endpoints/movieEndpoints";
import Grid from "../../../components/Grid";

const ShowMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const bookmark = useSelector((state) => state.bookmarks.bookmarks);
  const page = 1;

  const { data, isLoading, error } = useGetMoviesQuery(page);

  const isFavorite = (movie) => {
    return favorites.find((item) => item.id === movie.id);
  };

  const isBookmark = (movie) => {
    return bookmark.find((item) => item.id === movie.id);
  };
  const handleNavigate = (movie) => {
    navigate(`/movies/${movie?.id}`);
  };
  const handleDropdown = (e) => {
    e.stopPropagation();
  };

  const handleFavouriteMovie = (e, movie) => {
    e.stopPropagation();
    toast.success("Added to favorite movie!", {
      position: "top-center",
    });
    dispatch(addFavorite(movie));
  };

  const handleMoviesBookmark = (e, movie) => {
    e.stopPropagation();
    toast.success("Added to bookmark movie!", {
      position: "top-center",
    });
    dispatch(addBookmark(movie));
  };
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-3xl font-semibold">movies</h1>
        <Link
          to={"/movies"}
          className="text-sm text-gray-800 underline duration-300"
        >
          see all
        </Link>
      </div>
      {isLoading ? (
        <Grid>
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </Grid>
      ) : error ? (
        <AlertDestructive errorMessage={error.message} />
      ) : null}
      <Grid>
        {data?.results.map((movie) => (
          <div
            className="min-h-80"
            key={movie.id}
            onClick={() => handleNavigate(movie)}
          >
            <Card className="w-full h-full shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-500">
              <div className="relative">
                <img
                  className="w-full h-56 object-cover rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />

                <h1 className="text-sm flex justify-center items-center font-bold absolute bottom-2 right-2 bg-gradient-to-r from-gray-600 to-yellow-400 text-white px-3 py-1 rounded-lg shadow-md">
                  <FaStar className="mr-1 fill-yellow-400" />{" "}
                  {movie.vote_average}
                </h1>

                <span className="font-bold absolute top-2 right-2 bg-gray-100 p-2 rounded-full shadow-lg">
                  <HoverCard>
                    <HoverCardTrigger>
                      <BiDotsHorizontalRounded
                        onClick={(e) => handleDropdown(e)}
                        className="fill-gray-700 text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-20 flex flex-col justify-between items-center gap-2 bg-gray-800 bg-opacity-90 rounded-lg p-2">
                      <button
                        onClick={(e) => handleFavouriteMovie(e, movie)}
                        className={`${
                          isFavorite(movie) ? "text-red-500" : ""
                        } border-2 border-transparent rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors duration-200`}
                      >
                        <FaHeart className="fill-white" />
                      </button>
                      <button
                        onClick={(e) => handleMoviesBookmark(e, movie)}
                        className={`${
                          isBookmark(movie) ? "text-red-500" : ""
                        } border-2 border-transparent rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors duration-200`}
                      >
                        <FaBookBookmark className="fill-white" />
                      </button>
                    </HoverCardContent>
                  </HoverCard>
                </span>
              </div>

              <CardHeader className="px-4 py-3">
                <p className="text-lg font-semibold text-white hover:text-blue-200 cursor-pointer transition-colors duration-300">
                  {movie.title}
                </p>
                <span className="text-sm text-gray-300">
                  {movie.release_date}
                </span>
              </CardHeader>
            </Card>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default ShowMovies;

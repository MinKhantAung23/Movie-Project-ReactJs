/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { FaHome, FaStar } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaBookmark, FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { addFavorite } from "../../../store/features/favoritesSlice";
import { addBookmark } from "../../../store/features/bookmarkSlice";

const SeriesCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector((state) => state.favorites.favorites);
  const bookmark = useSelector((state) => state.bookmarks.bookmarks);

  const isFavorite = () => {
    const { id } = item;
    return favorites.find((item) => item.id === id);
  };

  const isBookmark = () => {
    const { id } = item;
    return bookmark.find((item) => item.id === id);
  };
  const handleSeriesNavigate = () => {
    navigate(`/series/${item.id}`);
  };
  const handleDropdown = (e) => {
    e.stopPropagation();
  };

  const handleSeriesFavourite = (e) => {
    e.stopPropagation();
    toast.success("Added to favorite successfully!", {
      position: "top-center",
    });
    dispatch(addFavorite(item));
  };

  const handleSeriesBookmark = (e) => {
    e.stopPropagation();
    toast.success("Added to bookmark successfully!", {
      position: "top-center",
    });
    dispatch(addBookmark(item));
  };
  return (
    <div className="min-h-80" onClick={handleSeriesNavigate}>
      <Card className="w-full h-full shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-500">
        <div className="relative">
          <img
            className="w-full h-56 object-cover rounded-t-lg"
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt={item.name}
          />

          <h1 className="text-sm flex justify-center items-center font-bold absolute bottom-2 right-2 bg-gradient-to-r from-gray-600 to-yellow-400 text-white px-3 py-1 rounded-lg shadow-md">
            <FaStar className="mr-1 fill-yellow-400" /> {item.vote_average}
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
                  onClick={(e) => handleSeriesFavourite(e)}
                  className={`${
                    isFavorite() ? "text-red-500" : "text-white"
                  } border-2 border-transparent rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors duration-200`}
                >
                  <FaHeart />
                </button>
                <button
                  onClick={(e) => handleSeriesBookmark(e)}
                  className={`${
                    isBookmark() ? "text-red-500" : "text-white"
                  } border-2 border-transparent rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors duration-200`}
                >
                  <FaBookmark />
                </button>
              </HoverCardContent>
            </HoverCard>
          </span>
        </div>

        <CardHeader className="px-4 py-3">
          <p className="text-lg font-semibold text-white hover:text-blue-200 cursor-pointer transition-colors duration-300">
            {item.name}
          </p>
          <span className="text-sm text-gray-300">{item.first_air_date}</span>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SeriesCard;

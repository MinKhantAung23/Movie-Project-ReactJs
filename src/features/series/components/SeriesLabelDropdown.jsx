// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SeriesLabelDropdown = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Browse Series Label</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-50 bg-gray-200 mx-8 my-4 p-4 rounded-md shadow-lg shadow-gray-500">
        <DropdownMenuLabel className="text-gray-900 text-lg border-b-2 border-black">
          Series Label
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="popular"
            className="py-2 hover:bg-gray-300 px-2 rounded-md active:bg-blue-500"
          >
            <Link
              to={"/series/popular"}
              className="text-gray-700  text-base font-semibold"
            >
              Popular
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="upcoming"
            className="py-2 hover:bg-gray-300 px-2 rounded-md active:bg-blue-500"
          >
            <Link
              to={"/series/upcoming"}
              className="text-gray-700 text-base font-semibold"
            >
              Upcoming
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="topRated"
            className="py-2 hover:bg-gray-300 px-2 rounded-md active:bg-blue-500"
          >
            <Link
              to={"/series/top-rated"}
              className="text-gray-700 text-base font-semibold"
            >
              Top Rated
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="nowPlaying"
            className="py-2 hover:bg-gray-300 px-2 rounded-md active:bg-blue-500"
          >
            <Link
              to={"/series/now-playing"}
              className="text-gray-700 text-base font-semibold"
            >
              Now Playing
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="trending"
            className="py-2 hover:bg-gray-300 px-2 rounded-md active:bg-blue-500"
          >
            <Link
              to={"/series/trending"}
              className="text-gray-700 text-base font-semibold"
            >
              Trending
            </Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SeriesLabelDropdown;

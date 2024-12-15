/* eslint-disable react/prop-types */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../store/features/favoritesSlice";
import { removeBookmark } from "../store/features/bookmarkSlice";

const DeleteConfirm = ({ movie, isBookmark }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  // Open the dialog
  const openDialog = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  // Close the dialog
  const closeDialog = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const handleRemoveFavorite = (e, movie) => {
    e.stopPropagation();

    if (isBookmark) {
      dispatch(removeBookmark(movie.id));
    } else {
      dispatch(removeFavorite(movie.id));
    }
    closeDialog(e);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        onClick={(e) => openDialog(e)}
        className=" bg-red-500 text-white  px-3 py-2 rounded-md hover:bg-red-600 transition"
      >
        Remove
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => closeDialog(e)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={(e) => handleRemoveFavorite(e, movie)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirm;

import { configureStore } from "@reduxjs/toolkit";
import { ApiServices } from "../services/ApiServices";
import bookmarkReducer from "./features/bookmarkSlice";
import favoritesReducer from "./features/favoritesSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        bookmarks: bookmarkReducer,
        [ApiServices.reducerPath]: ApiServices.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ApiServices.middleware);
    }
});

export default store;
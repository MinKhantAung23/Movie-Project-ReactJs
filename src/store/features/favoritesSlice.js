import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
}
export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const existed = state.favorites.find(item => item.id === action.payload.id)
            if (!existed) {
                state.favorites.push(action.payload)
                localStorage.setItem("favorites", JSON.stringify(state.favorites))
            }
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload)
            if (state.favorites.length === 0) {
                localStorage.removeItem("favorites")
            } else {
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        }
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
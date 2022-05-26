import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Leonardo",
  id: 42,
  favorites: [
    161235, 67283, 357311
  ]
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    modifyFavorite: (state, action) => {
      const favExists = state.favorites.findIndex(id => id === action.payload);

      if (favExists >= 0) {

        // Copy Array, in order to splice it properly.
        // Otherwise it just returns an array containing
        // the deleted entry
        const updatedFavorites = [...state.favorites];

        updatedFavorites.splice(favExists, 1);
        state.favorites = updatedFavorites;

      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    }
  },
});

export const {modifyFavorite} = userSlice.actions;

export default userSlice.reducer;
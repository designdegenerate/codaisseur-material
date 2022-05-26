import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const feedslice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      state.posts = [...action.payload];
      state.loading = false;
    }
  }
})

export const {startLoading, postsFetched} = feedslice.actions;
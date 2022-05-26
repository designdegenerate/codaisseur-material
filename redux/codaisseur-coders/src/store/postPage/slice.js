import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postFullyfetched: (state, action) => {
      state.loading = false;

      state.post = {...action.payload.postResponse.data};
      state.comments = {...action.payload.commentsResponse.data};
    }
  }
})

export const {startLoading, postFullyfetched} = postSlice.actions;
export default postSlice.reducer;
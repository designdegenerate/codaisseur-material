import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    attemptLogin: (state) => {
      state.loading = true;
    },
    setAuthToken: (state,action) => {
      state.accessToken = action.payload;
      state.loading = false;
    },
    setProfileInfo: (state, action) => {
      state.me = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.me = null;
      state.accessToken = null;
    }
  }
})

export const {attemptLogin, setAuthToken, setProfileInfo, logout} = authSlice.actions;
export default authSlice.reducer;
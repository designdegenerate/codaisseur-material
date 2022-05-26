import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";
import postReducer from "./postPage/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postReducer,
    auth: authReducer
  }
});

export default store;
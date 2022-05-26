import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice"
import pizzaReducer from "./pizzas/slice"
import restaurantsReducer from "./restaurants/slice"

const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    user: userReducer,
    restaurants: restaurantsReducer
  }
})

export default store;
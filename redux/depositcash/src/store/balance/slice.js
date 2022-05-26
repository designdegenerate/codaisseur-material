import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    widthdraw: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    reset: (state, action) => {
      state.amount = initialState.amount;
    }

  }
})

export const {deposit, widthdraw, reset} = balanceSlice.actions;
export default balanceSlice.reducer;
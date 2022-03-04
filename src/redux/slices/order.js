import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order", // name of state
  initialState: { orders: [] }, // initial state value
  reducers: {
    addItem: (state, action) => {
      state.orders.push(action.payload);
    },
    // state : current state value ,
    // action : udpates on state,
    // payload : containsn updated values for state
  },
});

export default orderSlice.reducer;

export const { addItem } = orderSlice.actions;

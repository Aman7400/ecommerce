import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order", // name of state
  initialState: { orders: [] }, // initial state value
  reducers: {
    addItem: (state, action) => {
      state.orders.push(action.payload);
    },
    removeItem: (state, action) => {
      let temp = state.orders.filter((order) => {
        console.log(action.payload);
        return order.name !== action.payload;
      });
      state.orders = [...temp];
    },
    // state : current state value ,
    // action : udpates on state,
    // payload : containsn updated values for state
  },
});

export default orderSlice.reducer;

export const { addItem, removeItem } = orderSlice.actions;

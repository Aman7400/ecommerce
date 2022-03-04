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
    updateItemCount: (state, action) => {
      console.log(action.payload);
      let item = state.orders[action.payload.position];
      console.log(item);
      state.orders[action.payload.position] = {
        ...item,
        count: action.payload.count,
      };
    },
    emptyCart: (state, action) => {
      state.orders = [];
    },
    // state : current state value ,
    // action : udpates on state,
    // payload : containsn updated values for state
  },
});

export default orderSlice.reducer;

export const { addItem, removeItem, updateItemCount, emptyCart } =
  orderSlice.actions;

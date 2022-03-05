import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order", // name of state
  initialState: { orders: [] }, // initial state value
  reducers: {
    addItem: (state, action) => {
      const { orders } = state;
      console.log(action.payload);

      let index = orders.findIndex((order) => action.payload.uid === order.uid);

      //   * Add Item if  uid is not already present
      if (index === -1) {
        orders.push(action.payload);
      } else {
        //   * If Item with uid is already existing , update it
        console.log(orders[index]);
        orders[index].count++;
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const { uid } = action.payload;
      const { orders } = state;
      let temp = orders.filter((order) => {
        return order.uid !== uid;
      });
      console.log({ temp });
      state.orders = [...temp];
    },
    updateItemCount: (state, action) => {
      console.log(action.payload);
      const { orders } = state;
      const { uid, count } = action.payload;

      let index = orders.findIndex((o) => o.uid === uid);
      console.log(orders[index]);
      orders[index].count = count;
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

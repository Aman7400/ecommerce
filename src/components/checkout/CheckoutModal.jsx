import * as React from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  emptyCart,
  removeItem,
  updateItemCount,
} from "../../redux/slices/order";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSnackbar } from "notistack";

export default function CheckoutModal({ open, setCheckout }) {
  const totalOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const amt = totalOrders.reduce(
    (a, v) => (a = Number(a) + Number(v.price) * Number(v.count)),
    0
  );

  const handleCheckout = () => {
    dispatch(emptyCart());
    enqueueSnackbar("Order Placed 🥳", { variant: "success" });
    handleClose();
  };

  const handleClose = () => {
    setCheckout(false);
  };

  const handleDelete = (order) => {
    dispatch(removeItem(order));
  };

  const handleIncrease = (pos, count) => {
    dispatch(updateItemCount({ position: pos, count: count + 1 }));
  };

  const handleDecrease = (pos, count) => {
    dispatch(updateItemCount({ position: pos, count: count - 1 }));
  };

  return (
    <div>
      <Dialog open={open} onClose={() => {}}>
        {totalOrders.length > 0 ? (
          <>
            <DialogTitle>Your Cart</DialogTitle>
            <DialogContent>
              {totalOrders.map((order, i) => (
                <Box key={i}>
                  <Typography>
                    {order.name}
                    {order.price}
                    <Button onClick={() => handleDelete(order.name)}>
                      Delete
                    </Button>
                  </Typography>
                  <Stack direction="row">
                    <IconButton onClick={() => handleIncrease(i, order.count)}>
                      +
                    </IconButton>
                    {order.count}
                    <IconButton onClick={() => handleDecrease(i, order.count)}>
                      -
                    </IconButton>
                  </Stack>
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button>Total : {amt}</Button>
              <Button onClick={handleCheckout} autoFocus>
                Checkout
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Your Cart is empty</DialogTitle>
            <Button onClick={handleClose}>Shop</Button>
          </>
        )}
      </Dialog>
    </div>
  );
}

import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { removeItem } from "../../redux/slices/order";

export default function CheckoutModal({ open, setCheckout }) {
  const totalOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const handleClose = () => {
    setCheckout(false);
  };

  const handleDelete = (order) => {
    dispatch(removeItem(order));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {totalOrders.length > 0 ? (
          <>
            <DialogTitle>Your Cart</DialogTitle>
            <DialogContent>
              {totalOrders.map((order, i) => (
                <Typography key={i}>
                  {order.name}
                  {order.price}
                  <Button onClick={() => handleDelete(order.name)}>
                    Delete
                  </Button>
                </Typography>
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
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

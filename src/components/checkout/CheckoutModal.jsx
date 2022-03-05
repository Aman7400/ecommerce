import * as React from "react";

import {
  Avatar,
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
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
import { Icon } from "@iconify/react";
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
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ p: 5 }}>
          {totalOrders.length > 0 ? (
            <>
              <DialogTitle>Your Cart</DialogTitle>
              <Box sx={{}}>
                {totalOrders.map((order, i) => (
                  <OrderCard
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                    handleDelete={handleDelete}
                    order={order}
                    i={i}
                    key={i}
                  />
                ))}
              </Box>

              <Stack direction="row">
                <Button>Total : ${amt}</Button>
                <Button onClick={handleCheckout} autoFocus>
                  Checkout
                </Button>
              </Stack>
            </>
          ) : (
            <>
              <EmptyCart />
            </>
          )}
        </Box>
      </Dialog>
    </div>
  );
}

// * Order Card
function OrderCard({ order, handleDecrease, handleIncrease, handleDelete, i }) {
  return (
    <Card
      sx={{
        my: 1,
        minWidth: 380,
        p: 2,
        borderRadius: 2,
        width: "100%",
        boxShadow: "0 15px 34px 0 rgb(175 181 204 / 32%)",
      }}
    >
      <Grid container columnSpacing={2}>
        <Grid item xs={2}>
          <Avatar src={`/assets/${order.src}`} size="large" />
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography variant="bod1">{order.name}</Typography>
            <Typography variant="body2">${order.price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Chip label="-" onClick={() => handleDecrease(i, order.count)} />

            <span>{order.count}</span>

            <Chip label="+" onClick={() => handleIncrease(i, order.count)} />

            {/* <IconButton onClick={() => handleDecrease(i, order.count)}>
                -
              </IconButton> */}
            {/* {order.count}
              <IconButton onClick={() => handleIncrease(i, order.count)}>
                +
              </IconButton> */}
          </Stack>
        </Grid>
      </Grid>

      {/* <Stack direction="row" spacing={2}>
        <Avatar src={`/assets/${order.src}`} size="large" />
        <Stack>
          <Typography variant="h6">{order.name}</Typography>
          <Typography variant="body1">${order.price}</Typography>
        </Stack>
        <Stack direction="row">
          <IconButton onClick={() => handleDecrease(i, order.count)}>
            -
          </IconButton>
          {order.count}
          <IconButton onClick={() => handleIncrease(i, order.count)}>
            +
          </IconButton>
        </Stack>

        <IconButton onClick={() => handleDelete(order.name)}>
          <Icon icon="fluent:delete-48-filled" />
        </IconButton>
      </Stack> */}
    </Card>
  );
}

// * Empty Cart Section
function EmptyCart({ handleClose }) {
  return (
    <Box
      sx={{
        p: { xs: 5, md: 8 },

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Your cart is empty</Typography>
      <Box
        sx={{
          img: {
            width: 150,
            height: "auto",
          },
        }}
      >
        <img src="/assets/empty-cart.svg" alt="empty-cart" />
      </Box>
      <Button fullWidth onClick={handleClose}>
        Shop
      </Button>
    </Box>
  );
}

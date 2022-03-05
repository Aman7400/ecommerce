import {
  Avatar,
  Box,
  Button,
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

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import NewCart from "./NewCart";
import React from "react";
import { useSnackbar } from "notistack";

const Cart = () => {
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
    // handleClose();
  };

  //   const handleClose = () => {
  //     setCheckout(false);
  //   };

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
    <Box sx={{ p: 5 }}>
      {totalOrders.length > 0 ? (
        <>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
              Your Cart
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="secondary"
              endIcon={<Icon icon="ic:baseline-fastfood" />}
              size="large"
              //   sx={{ fontWeight: "bold", mb: 1 }}
            >
              Back to Menu
            </Button>
          </Stack>
          <NewCart orders={totalOrders} />
        </>
      ) : (
        <EmptyCart />
      )}
    </Box>
    // <Box sx={{ p: 5 }}>
    //   <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
    //     Your Cart
    //   </Typography>
    //   {totalOrders.length > 0 ? (
    //     <>
    //       <Box sx={{ py: 5 }}>
    //         {totalOrders.map((order, i) => (
    //           <OrderCard
    //             handleDecrease={handleDecrease}
    //             handleIncrease={handleIncrease}
    //             handleDelete={handleDelete}
    //             order={order}
    //             i={i}
    //             key={i}
    //           />
    //         ))}
    //       </Box>

    //       <Stack spacing={2} sx={{ alignItems: "end" }}>
    //         <Typography variant="h4">Total : ${amt}</Typography>
    //         <Button
    //           size="large"
    //           variant="contained"
    //           color="secondary"
    //           onClick={handleCheckout}
    //           autoFocus
    //         >
    //           Checkout
    //         </Button>
    //       </Stack>
    //     </>
    //   ) : (
    //     <>
    //       <EmptyCart />
    //     </>
    //   )}
    // </Box>
  );
};

export default Cart;

// * Order Card
function OrderCard({ order, handleDecrease, handleIncrease, handleDelete, i }) {
  return (
    <Card
      sx={{
        my: 1,
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
        <Grid item xs={3}>
          <Stack>
            <Typography variant="h6">{order.name}</Typography>
            <Typography variant="body1">${order.price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Chip label="-" onClick={() => handleDecrease(i, order.count)} />

            <span>{order.count}</span>

            <Chip label="+" onClick={() => handleIncrease(i, order.count)} />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography variant="h6">${order.count * order.price}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <IconButton>
            <Icon icon="fluent:delete-48-filled" />
          </IconButton>
        </Grid>
      </Grid>
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
      <Typography variant="h2">Your cart is empty</Typography>
      <Box
        sx={{
          img: {
            width: 500,
            height: "auto",
          },
        }}
      >
        <img src="/assets/empty-cart.svg" alt="empty-cart" />
      </Box>
      <Button size="large" variant="outlined" component={Link} to="/">
        Shop Now
      </Button>
    </Box>
  );
}

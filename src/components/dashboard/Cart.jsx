import { Box, Button, Typography } from "@mui/material";

import CartTable from "./CartTable";
import { Link } from "react-router-dom";
import React from "react";
import SectionHeader from "./SectionHeader";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalOrders = useSelector((state) => state.orders);

  return (
    <Box sx={{ p: 5 }}>
      {totalOrders.length > 0 ? (
        <>
          <SectionHeader heading="Your Cart" />
          <CartTable />
        </>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default Cart;

// * Empty Cart Section
function EmptyCart() {
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

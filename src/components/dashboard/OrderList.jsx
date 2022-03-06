import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import SectionHeader from "./SectionHeader";
import axios from "axios";
import { format } from "date-fns";

const OrderList = () => {
  const [orders, setOrder] = useState([]);

  async function getAllOrders() {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("/orders/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log({ res });
      setOrder(res.data.orders);
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <Box sx={{ p: 5 }}>
      {/* Header */}
      <SectionHeader heading="Your Orders" />
      <Box>
        <Grid container spacing={2} sx={{ my: 5 }}>
          {orders.map((order, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <OrderDetailsCard order={order} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderList;

function OrderDetailsCard({ order }) {
  const { amt, createdAt, _id } = order;
  let orderDate;
  let orderId = `#${_id.slice(0, 8)}`;
  if (createdAt) {
    orderDate = format(new Date(createdAt?.split("T")[0]), "dd MMM,yyyy");
  }

  return (
    <Card sx={{ boxShadow: "0 15px 34px 0 rgb(175 181 204 / 32%)", p: 5 }}>
      <Typography variant="body1">Order Id: {orderId}</Typography>
      <Typography variant="h6">Amount: ${amt}</Typography>
      <Typography variant="body2">Ordered on: {orderDate}</Typography>
    </Card>
  );
}

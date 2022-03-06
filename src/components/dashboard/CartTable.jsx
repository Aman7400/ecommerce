import * as React from "react";

import {
  Avatar,
  Button,
  Chip,
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
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function CartTable() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  // *  Calculate the total
  const amt = orders.reduce(
    (a, v) => (a = Number(a) + Number(v.price) * Number(v.count)),
    0
  );

  const handleCheckout = async () => {
    console.log({ orders, amt });

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/orders/new`,
        { amt, items: orders },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log({ res });

      dispatch(emptyCart());
      enqueueSnackbar("Order Placed 🥳", { variant: "success" });
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDelete = (uid) => {
    dispatch(removeItem({ uid }));
  };

  const handleIncrease = (uid, count) => {
    dispatch(updateItemCount({ uid, count: count + 1 }));
  };

  const handleDecrease = (uid, count) => {
    console.log(count);
    // * If Count goes to zero then remove Item
    if (count - 1 === 0) {
      return dispatch(removeItem({ uid }));
    }
    dispatch(updateItemCount({ uid, count: count - 1 }));
  };

  return (
    <TableContainer
      sx={{ boxShadow: "0 15px 34px 0 rgb(175 181 204 / 32%)", p: 5 }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          {orders.map((order) => (
            <TableRow
              key={order.uid}
              sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction="row" spacing={2}>
                  <Avatar src={`/assets/${order.src}`} size="large" />

                  <Typography variant="h6">{order.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">${order.price}</TableCell>
              <TableCell align="right">
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ justifyContent: "end", alignItems: "center" }}
                >
                  <Chip
                    label="-"
                    onClick={() => handleDecrease(order.uid, order.count)}
                  />

                  <span>{order.count}</span>

                  <Chip
                    label="+"
                    onClick={() => handleIncrease(order.uid, order.count)}
                  />
                </Stack>
              </TableCell>
              <TableCell align="right">${order.price * order.count}</TableCell>
              <TableCell sx={{ p: 0 }} align="right">
                <IconButton onClick={() => handleDelete(order.uid)}>
                  <Icon icon="fluent:delete-48-filled" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell align="right">
              <Typography variant="h5">Subtotal</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h5">${amt}</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} />

            <TableCell align="right">
              <Typography variant="h5">
                {" "}
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={handleCheckout}
                  endIcon={<Icon icon="ic:baseline-shopping-cart-checkout" />}
                >
                  Checkout
                </Button>
              </Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

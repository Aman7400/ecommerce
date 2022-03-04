import { Card, IconButton, Stack, Typography, styled } from "@mui/material";

import { Icon } from "@iconify/react";
import React from "react";
import { addItem } from "../../redux/slices/order";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#000",
  padding: theme.spacing(3),
  position: "relative",
  justifyContent: "space-between",
  boxShadow: theme.shadows[10],
  display: "flex",
  cursor: "pointer",
  ".img-wrapper": {
    img: {
      width: "100%",
      height: "100%",
      maxWidth: 140,
    },
  },
}));

const DishCard = ({ dish, id }) => {
  //   const { name, src, price } = dish;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  // * Handle Add to cart
  function handleAddToCart(d) {
    dispatch(addItem(d.name));
    enqueueSnackbar(`${d.name} added`, { variant: "success" });
  }

  return (
    <StyledCard>
      {/* {name || "DishName"}
      {src || "Something"}
      {price || "123456"} */}
      <section className="img-wrapper">
        <img src="/assets/dish.png" alt="Dish" />
      </section>
      <Stack>
        <Typography variant="h4" color="white">
          {dish.name}
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography variant="h6" color="white">
            ${dish.price}
          </Typography>
          <IconButton
            onClick={() => {
              handleAddToCart(dish);
            }}
            size="large"
            sx={{ color: "#fff" }}
          >
            <Icon icon="bxs:message-square-add" />
          </IconButton>
        </Stack>
      </Stack>
    </StyledCard>
  );
};

export default DishCard;

import {
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

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
    dispatch(addItem({ ...d, count: 1 }));
    enqueueSnackbar(`${d.name} added`, { variant: "success" });
  }

  return (
    <StyledCard>
      <section className="img-wrapper">
        <img src={`/assets/${dish.src}`} alt="Dish" />
      </section>
      <Stack sx={{ my: 1 }}>
        <Typography
          variant="h4"
          sx={{ textTransform: "capitalize" }}
          color="white"
        >
          {dish.name}
        </Typography>
        <Stack spacing={1}>
          <Typography sx={{ textAlign: "end" }} variant="body1" color="white">
            ${dish.price}
          </Typography>
          <Button
            onClick={() => {
              handleAddToCart(dish);
            }}
            size="large"
            color="secondary"
            variant="contained"
            endIcon={<Icon icon="bxs:message-square-add" />}
          >
            Add To Cart
            {/* <Icon icon="bxs:message-square-add" /> */}
          </Button>
        </Stack>
      </Stack>
    </StyledCard>
  );
};

export default DishCard;

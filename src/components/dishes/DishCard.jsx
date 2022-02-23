import { Icon } from "@iconify/react";
import { Card, IconButton, Stack, styled, Typography } from "@mui/material";
import React from "react";

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

const DishCard = ({ dish }) => {
  //   const { name, src, price } = dish;
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
          {dish}
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography variant="h6" color="white">
            $100.00
          </Typography>
          <IconButton size="large" sx={{ color: "#fff" }}>
            <Icon icon="bxs:message-square-add" />
          </IconButton>
        </Stack>
      </Stack>
    </StyledCard>
  );
};

export default DishCard;

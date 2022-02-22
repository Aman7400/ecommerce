import { IconButton, Stack, styled, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled(Stack)(({ theme }) => ({}));

const categories = [
  { name: "Burger", path: "/categories/burger", src: "/assets/burger.svg" },
  { name: "Pizza", path: "/categories/pizza", src: "/assets/pizza.svg" },
  { name: "Fries", path: "/categories/fries", src: "/assets/fries.svg" },
];

const Categories = () => {
  return (
    <Wrapper spacing={2} direction="row" sx={{ alignItems: "center", my: 3 }}>
      {categories.map((category, index) => (
        <Tooltip title={category.name} key={index}>
          <IconButton sx={{ p: 2 }} component={Link} to={category.path}>
            <img src={category.src} alt={category.name} />
          </IconButton>
        </Tooltip>
      ))}
    </Wrapper>
  );
};

export default Categories;

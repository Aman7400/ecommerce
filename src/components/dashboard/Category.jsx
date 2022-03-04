import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import DishCard from "../dishes/DishCard";
import { pizza, burger, fries } from "../../utils/data.utils";

const Wrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
}));

function HeadingCrumbs({ category }) {
  return (
    <Box>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link
          variant="h4"
          component="a"
          underline="none"
          color="inherit"
          href="/"
        >
          Category
        </Link>
        <Link
          variant="h4"
          color="text.primary"
          underline="none"
          href={`/categories/${category}`}
          sx={{ textTransform: "capitalize" }}
        >
          {category}
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

function CategoryGrid({ category }) {
  let dishes = [];

  if (category === "fries") {
    dishes = [...fries];
  } else if (category === "burger") {
    dishes = [...burger];
  } else {
    dishes = [...pizza];
  }

  return (
    <Box sx={{ my: 3 }}>
      <Grid container spacing={5}>
        {dishes.map((dish, id) => (
          <Grid item xs={12} md={6} lg={4} key={id}>
            <DishCard dish={dish} id={id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const Category = () => {
  let { category } = useParams();

  return (
    <Wrapper>
      <HeadingCrumbs category={category} />
      {/* Category Grid */}
      <CategoryGrid category={category} />
    </Wrapper>
  );
};

export default Category;

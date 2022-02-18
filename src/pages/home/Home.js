import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../../components/Reviews";

const Wrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  //   backgroundColor: theme.palette.primary.main,
  width: "100%",
  display: "flex",
  minHeight: `calc(100vh - 64px)`,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    height: "auto",
    padding: theme.spacing(3),
    textAlign: "center",
  },
}));

const HeroTextWrapper = styled("section")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  paddingLeft: theme.spacing(15),
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 0,
  },
}));
const HeroImageWrapper = styled("section")(({ theme }) => ({
  flex: 1,
  display: "grid",
  placeContent: "center",
  ">img": {
    [theme.breakpoints.down("md")]: {
      maxWidth: "360px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "240px",
    },
  },
}));

const Home = () => {
  return (
    <Wrapper>
      {/* Hero Text */}
      <HeroTextWrapper>
        <Box>
          <Typography variant="h1" sx={{ my: 2 }}>
            It’s not just{" "}
            <Typography color="primary" variant="h1" component="span">
              Food,
            </Typography>{" "}
            It’s an{" "}
            <Typography color="secondary" variant="h1" component="span">
              Experience.
            </Typography>{" "}
          </Typography>
          {/* Order Now Button */}
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ my: 2 }}
          >
            Order Now
          </Button>
        </Box>
        {/* Reviews */}
        <Reviews />
      </HeroTextWrapper>
      {/* Hero Image */}
      <HeroImageWrapper>
        <img src="/assets/burger.png" alt="burger" />
      </HeroImageWrapper>
    </Wrapper>
  );
};

export default Home;

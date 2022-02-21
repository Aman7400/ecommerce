import { Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(3),
  width: "100%",
  //   backgroundColor: theme.palette.secondary.light,
  //   backgroundImage: "url('/assets/special.png')",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
}));

const TodaySpecialCard = () => {
  return (
    <Wrapper>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          backgroundColor: "primary.light",
          p: 3,
          borderRadius: 5,
          boxShadow: 5,
        }}
      >
        <Stack>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} color="white">
            Today's Special
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600 }} color="white">
            Super Spicy Fudge
          </Typography>
        </Stack>
        <Button sx={{ color: "white" }}>Order Now</Button>
      </Stack>
    </Wrapper>
  );
};

export default TodaySpecialCard;

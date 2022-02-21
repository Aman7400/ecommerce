import { styled, Typography } from "@mui/material";
import React from "react";
import { SyncLoader } from "react-spinners";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
}));

const LoadingScreen = () => {
  return (
    <Wrapper>
      <Typography variant="h1" sx={{ fontWeight: "bold" }} color="white">
        Loading <SyncLoader color="#fff" margin={2} />
      </Typography>
    </Wrapper>
  );
};

export default LoadingScreen;

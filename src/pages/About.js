import { Container, styled, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

const About = () => {
  return (
    <Wrapper maxWidth="xl">
      <Typography variant="h1">Coming Soon</Typography>
    </Wrapper>
  );
};

export default About;

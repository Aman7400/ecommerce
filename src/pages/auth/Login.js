import {
  Button,
  Card,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundImage: `url("/assets/login-bg.png")`,
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledForm = styled(Card)(({ theme }) => ({
  maxWidth: "480px",
  width: "480px",
  [theme.breakpoints.down("sm")]: {
    width: "360px",
  },
  padding: theme.spacing(6),
  boxShadow: theme.shadows[5],
}));

const Login = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Typography variant="h4">Welcome Back,</Typography>
        <Typography variant="body1" color="gray">
          Please login with your credentials
        </Typography>
        <Stack sx={{ my: 3 }} spacing={2}>
          <TextField
            label="Email"
            size="large"
            name="email"
            type="email"
            fullWidth
          />
          <TextField
            label="Password"
            size="large"
            name="password"
            type="password"
            fullWidth
          />
          <Button size="large" variant="contained" color="secondary">
            Lets Go 🚀
          </Button>
        </Stack>
        <Stack>
          <Button
            component={Link}
            to="/register"
            size="small"
            sx={{ textTransform: "capitalize" }}
          >
            Create an Account? Sign Up
          </Button>
        </Stack>
      </StyledForm>
    </Wrapper>
  );
};

export default Login;

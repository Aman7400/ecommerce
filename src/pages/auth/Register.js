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
  backgroundImage: `url("/assets/register-bg.jpeg")`,
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledForm = styled(Card)(({ theme }) => ({
  maxWidth: "480px",
  width: "480px",
  [theme.breakpoints.down("sm")]: {
    width: "360px",
    padding: theme.spacing(4),
  },
  padding: theme.spacing(6),
  boxShadow: theme.shadows[5],
}));

const Register = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Typography variant="h4">Create an Account</Typography>
        <Typography variant="body1" color="gray">
          Please add with your credentials
        </Typography>
        <Stack sx={{ my: 3 }} spacing={2}>
          <TextField
            label="Full Name"
            size="large"
            name="fullName"
            type="text"
            fullWidth
          />
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
          <Button size="large" variant="contained" color="primary">
            Get Started 🍟
          </Button>
        </Stack>
        <Stack>
          <Button
            component={Link}
            to="/login"
            size="small"
            color="primary"
            sx={{ textTransform: "capitalize" }}
          >
            Have an Account? Login
          </Button>
        </Stack>
      </StyledForm>
    </Wrapper>
  );
};

export default Register;

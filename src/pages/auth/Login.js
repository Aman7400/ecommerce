import {
  Button,
  Card,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset(); // ! Reset not working
  };

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
            {...register("email")}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            size="large"
            type="email"
            name="email"
            fullWidth
          />
          <TextField
            {...register("password")}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            label="Password"
            size="large"
            name="password"
            type="password"
            fullWidth
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            size="large"
            variant="contained"
            color="secondary"
          >
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

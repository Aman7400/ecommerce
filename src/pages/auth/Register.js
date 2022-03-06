import * as yup from "yup";

import {
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Full Name is Required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required();

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
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        data
      );
      console.log(res);
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate("/login");
      reset({ email: "", password: "", fullName: "" });
    } catch (error) {
      console.log(error.response.data.message);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };

  return (
    <Wrapper>
      <StyledForm>
        <Typography variant="h4">Create an Account</Typography>
        <Typography variant="body1" color="gray">
          Please add your credentials
        </Typography>
        <Stack sx={{ my: 3 }} spacing={2}>
          <TextField
            {...register("fullName")}
            label="Full Name"
            size="large"
            name="fullName"
            type="text"
            fullWidth
            error={Boolean(errors.fullName?.message)}
            helperText={errors.fullName?.message}
          />
          <TextField
            {...register("email")}
            label="Email"
            size="large"
            name="email"
            type="email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            fullWidth
          />
          <TextField
            {...register("password")}
            label="Password"
            size="large"
            name="password"
            type="password"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            fullWidth
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            size="large"
            variant="contained"
            color="primary"
          >
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

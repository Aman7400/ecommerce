import * as yup from "yup";

import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { Icon } from "@iconify/react";
import axios from "axios";
import { profileSchema } from "../../utils/yup/schemas";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

export function ProfileForm() {
  const { user } = useOutletContext();

  const [image, setImage] = useState({
    file: "",
    preview:
      user.profilePic ||
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9B2RxsHDB_s7FZT0mljnhQHaHa%26pid%3DApi&f=1",
  });

  const defaultValues = {
    fullName: user?.fullName || "",
    addressLine1: user?.addressLine1 || "",
    addressLine2: user?.addressLine2 || "",
    mobileNo: user?.mobileNo || null,
    city: user?.city || "",
    postalCode: user?.postalCode || "",
  };

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(profileSchema),
  });
  const onSubmit = async (data) => {
    console.log(data, image);
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("profilePic", image.file);
      formData.append("addressLine1", data.addressLine1);
      formData.append("addressLine2", data.addressLine2);
      formData.append("city", data.city);
      formData.append("postalCode", data.postalCode);
      formData.append("mobileNo", data.mobileNo);

      const res = await axios.post("/user/profile", formData, {
        enctype: "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // const res = await axios.post("/user/login", data);
      console.log(res);
      // localStorage.setItem("token", res.data.token);
      enqueueSnackbar(res.data.message, { variant: "success" });
      // reset({ email: "", password: "" });
      window.location.reload();
    } catch (error) {
      console.log(error.response.data.message);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };

  return (
    <Card
      sx={{ boxShadow: "0 15px 34px 0 rgb(175 181 204 / 32%)", p: 5, my: 5 }}
    >
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ImageUpload image={image} setImage={setImage} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack sx={{ mb: 2 }}>
              <TextField
                {...register("fullName")}
                error={Boolean(errors.fullName?.message)}
                helperText={errors.fullName?.message}
                fullWidth
                size="large"
                label="Full Name"
              />
            </Stack>
            <Stack sx={{ mb: 2 }}>
              <TextField
                name="email"
                value={user?.email}
                disabled
                fullWidth
                size="large"
                label="Email"
              />
            </Stack>
            <Stack sx={{ mb: 2 }}>
              <TextField
                fullWidth
                size="large"
                {...register("mobileNo")}
                error={Boolean(errors.mobileNo?.message)}
                helperText={errors.mobileNo?.message}
                label="Mobile No"
              />
            </Stack>
            <Stack sx={{ mb: 2 }}>
              <TextField
                fullWidth
                size="large"
                {...register("addressLine1")}
                error={Boolean(errors.addressLine1?.message)}
                helperText={errors.addressLine1?.message}
                label="Address Line 1"
              />
            </Stack>
            <Stack sx={{ mb: 2 }}>
              <TextField
                fullWidth
                size="large"
                {...register("addressLine2")}
                error={Boolean(errors.addressLine2?.message)}
                helperText={errors.addressLine2?.message}
                label="Address Line 2"
              />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                size="large"
                {...register("city")}
                error={Boolean(errors.city?.message)}
                helperText={errors.city?.message}
                label="City"
              />
              <TextField
                fullWidth
                size="large"
                {...register("postalCode")}
                error={Boolean(errors.postalCode?.message)}
                helperText={errors.postalCode?.message}
                label="Postal Code"
              />
            </Stack>
          </Grid>
        </Grid>

        <Stack direction="row" sx={{ justifyContent: "end" }}>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="secondary"
            size="large"
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

const Input = styled("input")({
  display: "none",
});

function ImageUpload({ image, setImage }) {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          width={320}
          height={320}
          style={{
            borderRadius: "50%",
            objectFit: "center",
            padding: "1rem",
          }}
          src={image.preview}
          alt=""
        />
      </Box>

      <Input
        onChange={(event) =>
          setImage({
            file: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0]),
          })
        }
        accept="image/*"
        id="icon-button-file"
        type="file"
      />
      <Stack sx={{ justifyContent: "center", alignItems: "center", my: 1 }}>
        <Button
          endIcon={<Icon icon="ant-design:camera-filled" />}
          component="label"
          htmlFor="icon-button-file"
          size="large"
          color="secondary"
        >
          Upload
        </Button>
      </Stack>
    </>
  );
}

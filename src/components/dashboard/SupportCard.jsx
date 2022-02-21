import { Icon } from "@iconify/react";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const SupportCard = ({ user }) => {
  return (
    <Stack spacing={1} sx={{ p: 3, alignItems: "center" }}>
      <Typography variant="h6">Hi, {user?.fullName || "Stranger"}</Typography>
      <Button
        color="secondary"
        endIcon={<Icon icon="akar-icons:chat-dots" />}
        variant="contained"
        size="large"
      >
        Contact us
      </Button>
    </Stack>
  );
};

export default SupportCard;

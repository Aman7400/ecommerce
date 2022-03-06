import { Button, Stack, Typography } from "@mui/material";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import React from "react";

const SectionHeader = ({ heading }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: { xs: "start", sm: "center" },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        {heading}
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        endIcon={<Icon icon="ic:baseline-fastfood" />}
        size="large"
      >
        Back to Menu
      </Button>
    </Stack>
  );
};

export default SectionHeader;

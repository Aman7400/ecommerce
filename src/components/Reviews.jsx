import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Reviews = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ alignItems: "center", py: 2 }}
    >
      {/* Review Image */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ">img": {
            maxWidth: "120px",
          },
        }}
      >
        <img src="/assets/review.png" alt="review" />
      </Box>
      {/* Review Text */}
      <Stack sx={{ ml: { xs: 0, md: 5 } }}>
        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
          Our Happy Customers
        </Typography>
        <Typography color="grey" variant="caption">
          4.6 (12.8k reviews)
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Reviews;

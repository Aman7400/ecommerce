import { Box, Icon, Stack, Typography } from "@mui/material";
import React from "react";

const ReferCard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stack
        sx={{
          backgroundColor: "#000",
          borderRadius: "5px",
          p: 3,
          boxShadow: 15,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }} color="white">
          Refer a friend
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }} color="white">
          and get upto $100 benefits <Icon icon="fa-regular:share-square" />
        </Typography>
        {/* Illustrattion */}
        <Box
          sx={{
            mt: 5,

            ">img": {
              width: "444px",
              maxWidth: "100%",
              transform: "scale(1.05)",
            },
          }}
        >
          <img src="/assets/refer.svg" alt="refer" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ReferCard;

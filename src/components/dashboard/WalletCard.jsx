import { Icon } from "@iconify/react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const WalletCard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ p: 3, boxShadow: 2 }}>
        <Stack>
          <Typography variant="h6">Your Wallet</Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mt: 3 }}>
            $500.00
          </Typography>
          <Typography variant="body1" color="gray">
            Add more money to buy more food
          </Typography>
          <Button
            sx={{ my: 2, fontWeight: 600, fontSize: "large" }}
            size="large"
            color="secondary"
            endIcon={<Icon icon="bxs:wallet" />}
            variant="contained"
          >
            Add Funds
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default WalletCard;

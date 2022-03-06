import { Box, Typography } from "@mui/material";

import React from "react";
import SectionHeader from "./SectionHeader";

const Profile = () => {
  return (
    <Box sx={{ p: 5 }}>
      {/* Header */}
      <SectionHeader heading="Your Profile" />
    </Box>
  );
};

export default Profile;

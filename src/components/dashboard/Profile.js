import { Box } from "@mui/material";
import { ProfileForm } from "./ProfileForm";
import React from "react";
import SectionHeader from "./SectionHeader";

const Profile = () => {
  return (
    <Box sx={{ p: 5 }}>
      {/* Header */}
      <SectionHeader heading="Your Profile" />
      {/* Profile */}
      <ProfileForm />
    </Box>
  );
};

export default Profile;

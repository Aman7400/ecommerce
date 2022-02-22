import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Categories from "./CategoryMenu";
import TodaySpecialCard from "./TodaySpecialCard";

const DashboardHome = () => {
  return (
    <div>
      {/* Today Special */}
      <TodaySpecialCard />
      {/* Category */}
      <Box sx={{ p: 3, pb: 0 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Caetgory
        </Typography>
        {/* Options */}
        <Categories />
      </Box>
      {/* Popular Dishes */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Popular Dishes
        </Typography>
        <Link to="/popular/main">Im eatable</Link>
      </Box>
    </div>
  );
};

export default DashboardHome;

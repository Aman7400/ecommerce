import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { stringAvatar } from "../../utils/helper.util";
import { useSelector } from "react-redux";

const DashboardToolbar = ({ user }) => {
  // console.log({ user });
  const navigate = useNavigate();
  const totalOrders = useSelector((state) => state.orders);

  // * Handle More Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Foody
          </Typography>
          {/* // TODO - Add a search field*/}

          {/* Menu Buttons */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar {...stringAvatar(user?.fullName)} />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={totalOrders.length} color="secondary">
              <Icon icon="akar-icons:cart" />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <Icon icon="ep:menu" />
          </IconButton>
          <Menu
            id="dashboard-toolbar-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Orders</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardToolbar;

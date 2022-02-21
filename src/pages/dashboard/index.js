import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import { Icon } from "@iconify/react";
import WalletCard from "../../components/dashboard/WalletCard";
import ReferCard from "../../components/dashboard/ReferCard";
import SupportCard from "../../components/dashboard/SupportCard";
import TodaySpecialCard from "../../components/dashboard/TodaySpecialCard";
import Categories from "../../components/dashboard/Categories";

// * Root Wrapper
const RootWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  minHeight: "100vh",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    padding: theme.spacing(1),
  },
}));

const MainContentWrapper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const navigate = useNavigate();

  async function fetchUser() {
    try {
      if (token) {
        setIsLoading(true);
        const res = await axios.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsLoggedIn(true);
        setUserProfile(res.data.user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }

  // * Authenticate User
  useEffect(() => {
    fetchUser();
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      {!isLoggedIn ? (
        <Navigate to="/login" />
      ) : (
        <RootWrapper>
          {/* Its dashboard baby - {JSON.stringify(userProfile)}
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </Button> */}
          {/* Top Nav */}
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
                  <Avatar {...stringAvatar(userProfile?.fullName)} />
                </IconButton>

                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Icon icon="akar-icons:cart" />
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
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
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
          {/* Content */}
          <MainContentWrapper>
            <Grid container>
              <Grid item xs={12} lg={9}>
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
                </Box>
              </Grid>
              <Grid item xs={12} lg={3}>
                {/* Wallet */}
                <WalletCard />
                {/* Refer */}
                <ReferCard />
                {/* Support */}
                <SupportCard user={userProfile} />
              </Grid>
            </Grid>
          </MainContentWrapper>
        </RootWrapper>
      )}
    </>
  );
};

export default Dashboard;

function stringAvatar(name) {
  return {
    // sx: {
    //   bgcolor: stringToColor(name),
    // },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

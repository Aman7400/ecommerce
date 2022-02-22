import { Grid, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import WalletCard from "../../components/dashboard/WalletCard";
import ReferCard from "../../components/dashboard/ReferCard";
import SupportCard from "../../components/dashboard/SupportCard";
import DashboardToolbar from "../../components/dashboard/Toolbar";

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

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      {!isLoggedIn ? (
        <Navigate to="/login" />
      ) : (
        <RootWrapper>
          {/* Top Nav */}

          <DashboardToolbar user={userProfile} />

          {/* Content */}
          <MainContentWrapper>
            <Grid container>
              <Grid item xs={12} lg={9}>
                <Outlet />
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

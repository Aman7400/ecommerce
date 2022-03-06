import { Grid, styled } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

import DashboardToolbar from "../../components/dashboard/Toolbar";
import LoadingScreen from "../../components/LoadingScreen";
import ReferCard from "../../components/dashboard/ReferCard";
import SupportCard from "../../components/dashboard/SupportCard";
import WalletCard from "../../components/dashboard/WalletCard";
import axios from "axios";

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

  const fetchUser = useCallback(async () => {
    try {
      if (token) {
        setIsLoading(true);
        const res = await axios.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log({ res });
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
  }, [token]);

  // * Authenticate User
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetchUser();
    }
    return () => (isMount = false);
  }, [fetchUser]);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      {!isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <RootWrapper>
          {/* Top Nav */}

          <DashboardToolbar user={userProfile} />

          {/* Content */}
          <MainContentWrapper>
            <Grid container>
              <Grid item xs={12} lg={9}>
                <Outlet context={{ user: userProfile }} />
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

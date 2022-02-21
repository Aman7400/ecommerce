import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// TODO - Make Protected Route , Redirect if not logged in
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

  // Authenticate User
  useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      {!isLoggedIn ? (
        <Navigate to="/login" />
      ) : (
        <div>
          Its dashboard baby - {JSON.stringify(userProfile)}
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default Dashboard;

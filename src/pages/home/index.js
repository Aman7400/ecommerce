import React from "react";
import Navbar from "../../components/Navbar";
import { Offset } from "../../components/NavOffset";
import Home from "./Home";

const index = () => {
  return (
    <>
      <Navbar />
      <Offset />
      <Home />
    </>
  );
};

export default index;

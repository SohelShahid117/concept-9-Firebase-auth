import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;

import React, { useContext } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
  const HomeData = useContext(HomeContext);
  console.log(HomeData);
  return (
    <div>
      <h1>Inside home</h1>
    </div>
  );
};

export default InsideHome;

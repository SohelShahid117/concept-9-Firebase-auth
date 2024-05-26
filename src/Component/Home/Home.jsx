import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = (data) => {
  // console.log(data);
  // console.log(data.children);
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>This is home</h2>
      {data.children}
    </div>
  );
};

export default Home;

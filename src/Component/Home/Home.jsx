import React, { createContext, useState } from "react";

export const HomeContext = createContext(null);

const Home = (data) => {
  // console.log(data);
  // console.log(data.children);
  const [homeData, setHomeData] = useState("nJoy Remote Job from Home");
  return (
    <div>
      <h2>This is home</h2>
      {/* {data.children}
      {homeData} */}
      <HomeContext.Provider value={homeData}>
        {data.children}
      </HomeContext.Provider>
    </div>
  );
};

export default Home;

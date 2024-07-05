import React from "react";
import Feed from "./Feed";

const Home = ({ sidebar }) => {
  return (
    <div>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;

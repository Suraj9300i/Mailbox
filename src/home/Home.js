import React from "react";
import Emails from "./Emails";
import "./Home.css";
import ReadEmail from "./ReadEmail";
import Sidebar from "./Sidebar";

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="Home__emails">
        <Emails></Emails>
      </div>
      <div className="Home__readEmail">
        <ReadEmail></ReadEmail>
      </div>
    </div>
  );
};
export default Home;

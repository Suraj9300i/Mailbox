import React from "react";
import { useSelector } from "react-redux";
import Compose from "../Compose";
import Emails from "./Emails";
import "./Home.css";
import ReadEmail from "./ReadEmail";
import Sidebar from "./Sidebar";

export const Home = () => {
  const openCompose = useSelector((state) => state.compose);
  return (
    <>
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
      {openCompose && <Compose></Compose>}
    </>
  );
};
export default Home;

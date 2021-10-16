import React from "react";
import { signOutWithGoogle } from "../firebase";
import "./Home.css";

export const Home = () => {
  return (
    <div className="LoginScreen">
      <button
        onClick={(e) => {
          signOutWithGoogle();
        }}
      >
        logout
      </button>
    </div>
  );
};
export default Home;

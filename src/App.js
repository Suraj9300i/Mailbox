import "./App.css";
import Login from "./login/Login";
import Home from "./home/Home";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  let user = useSelector((state) => state.user);
  return (
    <div className="App">{user === null ? <Login></Login> : <Home></Home>}</div>
  );
}

export default App;

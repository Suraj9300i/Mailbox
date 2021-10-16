import React from "react";
import "./Login.css";
import mailbox from "./mailbox.png";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  return (
    <div className="LoginScreen">
      <div className="LoginBox">
        <div className="LoginBox__header">
          <img className="LoginBox-mailboxLogo" src={mailbox} alt="mailbox" />
          <h1 className="LoginBox-title">Mailbox</h1>
        </div>
        <div className="LoginBox__main">
          <form>
            <input className="input" type="text" placeholder="Email"></input>
            <input className="input" type="text" placeholder="Password"></input>
            <div className="LoginBox__main-socialmedia">
              <FcGoogle></FcGoogle>
              <BsGithub />
              <FaLinkedin />
            </div>
            <button className="login_button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

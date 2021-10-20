import React from "react";
import "./Login.css";
import mailbox from "./mailbox.png";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { signInWithGoogle } from "../firebase";
import { useEffect } from "react";
import { auth } from "../firebase";
import {
  signInUser,
  signOutUser,
  closeReadmail,
  closeCompose,
} from "../redux/action";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

const Login = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        dispatch(signOutUser());
        return;
      }
      let { displayName, email, photoURL, uid } = user.multiFactor.user;
      dispatch(signInUser({ displayName, email, photoURL, uid }));
      dispatch(closeReadmail());
      dispatch(closeCompose());
    });
  }, []);

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
              <span
                onClick={(e) => {
                  signInWithGoogle();
                  <Redirect to="/home"></Redirect>;
                }}
              >
                <FcGoogle></FcGoogle>
              </span>

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

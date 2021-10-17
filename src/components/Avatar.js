import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="Avatar" onClick={props.onClick}>
      <div className="Avatar_wrapper">
        <img
          src={
            props.src
              ? props.src
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};

export default Avatar;

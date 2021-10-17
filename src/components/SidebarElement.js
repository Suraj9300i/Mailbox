import React from "react";
import "./SidebarElement.css";

const SidebarElement = (props) => {
  return (
    <div
      className={`SidebarElement ${props.active && "SidebarElement-active"}`}
      onClick={props.onClick}
    >
      <div className="SidebarElement__main">
        {props.children}
        <p>{props.title}</p>
      </div>
      {props.active && props.notification > 0 && (
        <div className="notification">{props.notification}</div>
      )}
    </div>
  );
};

export default SidebarElement;

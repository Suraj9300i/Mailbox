import React from "react";
import Avatar from "../components/Avatar";
import "./EmailCard.css";
import { getDayTime } from "./getDayTime";

function trimMessage(message) {
  if (message.length < 200) return message;
  return message.substring(0, 200) + "...";
}

const EmailCard = ({ props, onClick }) => {
  // console.log("timestamp**", props.Timestamp);
  let datetime = getDayTime(props.Timestamp);
  trimMessage(props.Message);
  return (
    <div className="EmailCard" onClick={onClick}>
      <div className="EmailCard-Avatar">
        <Avatar src={props.photoURL}></Avatar>
      </div>
      <div className="EmailCard-Email">
        <div className="Email__Header">
          <p className="Email__Header-name">{props.SenderName}</p>
          <p className="Email__Header-date">
            <span className="Email__Header-day">{datetime.day}</span>
            <span className="Email__Header-time">{datetime.time}</span>
          </p>
        </div>
        <div className="Email__Body">
          <p className="Email__Body-Subject">{props.Subject}</p>
          <p className="Email__Body-Message">{trimMessage(props.Message)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;

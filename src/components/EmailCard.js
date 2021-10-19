import React from "react";
import Avatar from "../components/Avatar";
import "./EmailCard.css";

const EmailCard = () => {
  return (
    <div className="EmailCard">
      <div className="EmailCard-Avatar">
        <Avatar></Avatar>
      </div>
      <div className="EmailCard-Email">
        <div className="Email__Header">
          <p className="Email__Header-name">Suraj</p>
          <p className="Email__Header-date">
            <span className="Email__Header-day">Today</span>
            <span className="Email__Header-time">1:30PM</span>
          </p>
        </div>
        <div className="Email__Body">
          <p className="Email__Body-Subject">Subject</p>
          <p className="Email__Body-Message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla
            asperiores et voluptate eius quis nemo dolorum facere cupiditate
            recusandae sint reiciendis soluta nesciunt sequi
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;

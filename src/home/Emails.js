import React from "react";
import "./Emails.css";
import { BiSearch } from "react-icons/bi";
import EmailCard from "../components/EmailCard";

const Emails = () => {
  return (
    <div className="Emails">
      <div className="InputBox">
        <BiSearch />
        <input placeholder="Search"></input>
      </div>
      <div className="EmailsList">
        <EmailCard></EmailCard>
        <EmailCard></EmailCard>
        <EmailCard></EmailCard>
        <EmailCard></EmailCard>
        <EmailCard></EmailCard>
      </div>
    </div>
  );
};

export default Emails;

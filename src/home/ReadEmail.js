import React from "react";
import "./ReadEmail.css";
import { BsReplyFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Avatar from "../components/Avatar";

const ReadEmail = () => {
  return (
    <div className="ReadEmail">
      {/* --------------------Header------------------------------- */}
      <div className="ReadEmail__Header">
        <div className="ReadEmail__Header-icons">
          <BsReplyFill />
          <FaFolder />
          <MdDelete />
        </div>
        <div className="ReadEmail__Header-pages">
          <p>
            <span>1</span>/<span>180</span>
          </p>
          <GrFormPrevious />
          <GrFormNext style={{ color: "black" }} />
        </div>
      </div>

      {/* --------------------EmailBox------------------------------- */}
      <div className="EmailBox">
        <div>
          <Avatar></Avatar>
        </div>
        <div className="EmialBoxMain">
          <div className="EmialBox-Header">
            <p className="mailer">
              <span className="mailer-name">Suraj Gupta</span>
              <span className="mailer-email">{`<srjgupta17@gmail.com>`}</span>
            </p>
            <p className="mailer-time">{`Today 8:00 PM`}</p>
          </div>
          <div className="EmialBox-Message">
            <p className="Message-Subject">Subject</p>
            <p className="Message-Message">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              quae beatae nesciunt eligendi. Sequi, aliquam soluta hic explicabo
              cupiditate autem animi non eveniet modi adipisci veniam eius
              itaque iure dolorum aperiam magni eaque dolorem! Esse, quod iure
              quidem aspernatur molestias rerum vero nulla. Provident at
              excepturi necessitatibus similique libero ut.
            </p>
          </div>
        </div>
        <div className="ReplyBox">
          <input placeholder="Type Message"></input>
          <IoMdAttach />
          <IoMdSend style={{ color: "var(--light_skyblue)" }} />
        </div>
      </div>
    </div>
  );
};

export default ReadEmail;

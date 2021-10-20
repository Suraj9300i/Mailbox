import React from "react";
import "./ReadEmail.css";
import { BsReplyFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Avatar from "../components/Avatar";
import { useSelector, useDispatch } from "react-redux";
import image from "./Readmail.jpg";
import { getDayTime } from "../components/getDayTime";
import { db } from "../firebase";
import { closeReadmail } from "../redux/action";

const ReadEmail = () => {
  let email = useSelector((state) => state.readmail);
  let dispatch = useDispatch();
  let datetime =
    email === null
      ? { day: "xxxx", time: "0:00" }
      : getDayTime(email.Timestamp);

  function deleteEmailHandler() {
    db.collection("emails").doc(email.id).delete();
    dispatch(closeReadmail());
  }

  return (
    <>
      {email === null ? (
        <div className="ReadEmailImage-Box">
          <img className="ReadmailImage" src={image} alt="Readmail" />
        </div>
      ) : (
        <div className="ReadEmail">
          {/* --------------------Header------------------------------- */}
          <div className="ReadEmail__Header">
            <div className="ReadEmail__Header-icons">
              <BsReplyFill />
              <FaFolder />
              <MdDelete onClick={deleteEmailHandler} />
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
              <Avatar src={email.photoURL}></Avatar>
            </div>
            <div className="EmialBoxMain">
              <div className="EmialBox-Header">
                <p className="mailer">
                  <span className="mailer-name">{email.SenderName}</span>
                  <span className="mailer-email">{`<${email.SenderEmail}>`}</span>
                </p>
                <p className="mailer-time">{`${datetime.date} ${datetime.time}`}</p>
              </div>
              <div className="EmialBox-Message">
                <p className="mailer-email">{`to :- ${email.ReceiverEmail}`}</p>
                <p className="Message-Subject">{email.Subject}</p>
                <p className="Message-Message">{email.Message}</p>
              </div>
            </div>
            <div className="ReplyBox">
              <input placeholder="Type Message"></input>
              <IoMdAttach />
              <IoMdSend style={{ color: "var(--light_skyblue)" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadEmail;

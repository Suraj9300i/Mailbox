import React, { useState, useEffect } from "react";
import "./Compose.css";
import { GrFormClose } from "react-icons/gr";
import { IoMdAttach } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeCompose } from "../redux/action";
import firebase, { db, auth } from "../firebase";

const Compose = () => {
  const dispatch = useDispatch();
  const [hideCompose, sethideCompose] = useState(false);
  let [to, setTo] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let user = useSelector((state) => state.user);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  let formSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      to === "" ||
      subject === "" ||
      message === "" ||
      validateEmail(to) === false
    )
      return;

    let serverTime = firebase.firestore.FieldValue.serverTimestamp();
    db.collection(user.email).add({
      Message: message,
      ReceiverEmail: to,
      SenderEmail: user.email,
      SenderName: user.displayName,
      Subject: subject,
      Timestamp: new Date(),
      photoURL: user.photoURL,
      type: "sent",
    });

    db.collection(to).add({
      Message: message,
      ReceiverEmail: to,
      SenderEmail: user.email,
      SenderName: user.displayName,
      Subject: subject,
      Timestamp: new Date(),
      photoURL: user.photoURL,
      type: "received",
    });

    setMessage("");
    setSubject("");
    setTo("");
  };

  return (
    <div className={`Compose ${hideCompose && "Compose-hide"}`}>
      {/* ---------------Header----------------- */}
      <div
        className="Compose__Header"
        onClick={() => {
          sethideCompose(!hideCompose);
        }}
      >
        <p>New Message</p>
        <GrFormClose
          onClick={(e) => {
            dispatch(closeCompose());
          }}
        />
      </div>

      {/* -------------- Input Form ---------------- */}
      <div>
        <form className="InputForm">
          <input
            placeholder="To"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          ></input>
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          ></input>
          <textarea
            placeholder="Type message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="Compose__Footer">
            <button type="submit" onClick={formSubmitHandler}>
              Send
            </button>
            <IoMdAttach />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;

import React, { useState } from "react";
import "./Compose.css";
import { GrFormClose } from "react-icons/gr";
import { IoMdAttach } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeCompose } from "./redux/action";

const Compose = () => {
  const dispatch = useDispatch();
  const [hideCompose, sethideCompose] = useState(false);
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
          <input placeholder="To"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Type message..."></textarea>
          <div className="Compose__Footer">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
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

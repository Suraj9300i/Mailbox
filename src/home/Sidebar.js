import React, { useState } from "react";
import Avatar from "../components/Avatar";
import "./Sidebar.css";
import { BiLogOut, BiTrashAlt } from "react-icons/bi";
import { IoMail, IoWalletOutline } from "react-icons/io5";
import { HiOutlineStar } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { signOutWithGoogle } from "../firebase";
import { useSelector } from "react-redux";
import SidebarElement from "../components/SidebarElement";

const Sidebar = () => {
  let [selectSidebar, setSelectSidebar] = useState("Inbox");
  const user = useSelector((state) => state.user);
  return (
    <div className="Sidebar">
      {/* -------------- Header -------------------------- */}
      <div className="Sidebar__Header">
        <div className="Sidebar__Header-UserBox">
          <Avatar src={user.photoURL}></Avatar>
          <div>
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <div
          className="Sidebar__Header-logout"
          onClick={(e) => {
            signOutWithGoogle();
          }}
        >
          <BiLogOut></BiLogOut>
        </div>
      </div>

      {/* -------------- SidebarElements -------------------------- */}
      <div className="Sidebar_Elements">
        <SidebarElement
          title="Inbox"
          notification={20}
          active={selectSidebar === "Inbox"}
          onClick={() => {
            setSelectSidebar("Inbox");
          }}
        >
          <IoMail></IoMail>
        </SidebarElement>

        <SidebarElement
          title="Flagged"
          notification={10}
          active={selectSidebar === "Flagged"}
          onClick={() => {
            setSelectSidebar("Flagged");
          }}
        >
          <HiOutlineStar />
        </SidebarElement>

        <SidebarElement
          title="Draft"
          notification={24}
          active={selectSidebar === "Draft"}
          onClick={() => {
            setSelectSidebar("Draft");
          }}
        >
          <IoWalletOutline />
        </SidebarElement>

        <SidebarElement
          title="Sent"
          notification={14}
          active={selectSidebar === "Sent"}
          onClick={() => {
            setSelectSidebar("Sent");
          }}
        >
          <AiOutlineSend />
        </SidebarElement>

        <SidebarElement
          title="Trash"
          notification={17}
          active={selectSidebar === "Trash"}
          onClick={() => {
            setSelectSidebar("Trash");
          }}
        >
          <BiTrashAlt />
        </SidebarElement>

        <SidebarElement
          title="More"
          active={selectSidebar === "More"}
          onClick={() => {
            setSelectSidebar("More");
          }}
        >
          <FiGrid />
        </SidebarElement>

        {/* -------------- Folders -------------------------- */}

        <div className="Sidebar_Folders">
          <h1>Folders</h1>
          <SidebarElement
            title="Office"
            active={selectSidebar === "Office"}
            onClick={() => {
              setSelectSidebar("Office");
            }}
          >
            <FaFolder style={{ color: "#09009B" }} />
          </SidebarElement>

          <SidebarElement
            title="Personal"
            active={selectSidebar === "Personal"}
            onClick={() => {
              setSelectSidebar("Personal");
            }}
          >
            <FaFolder style={{ color: "#FF9292" }} />
          </SidebarElement>
          <SidebarElement
            title="Freelance"
            active={selectSidebar === "Freelance"}
            onClick={() => {
              setSelectSidebar("Freelance");
            }}
          >
            <FaFolder style={{ color: "#FFE699" }} />
          </SidebarElement>
        </div>
      </div>

      {/* -------------- Folders -------------------------- */}
      <div className="ComposeButton">Compose</div>
    </div>
  );
};

export default Sidebar;

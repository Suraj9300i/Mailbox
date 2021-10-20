import React, { useEffect, useState } from "react";
import "./Emails.css";
import { BiSearch } from "react-icons/bi";
import EmailCard from "../components/EmailCard";
import { db } from "../firebase";
import { openReadmail } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Emails = () => {
  let [emails, setEmails] = useState([]);
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    async function fun() {
      await db
        .collection(user.email)
        .orderBy("Timestamp", "desc")
        .onSnapshot(async (snapshot) => {
          const res = await snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setEmails(res);
        });
    }

    fun();
  }, []);
  return (
    <div className="Emails">
      <div className="InputBox">
        <BiSearch />
        <input placeholder="Search"></input>
      </div>
      <div className="EmailsList">
        {emails.map((email) => (
          <EmailCard
            props={email}
            key={email.id}
            onClick={(e) => {
              dispatch(openReadmail(email));
            }}
          ></EmailCard>
        ))}
      </div>
    </div>
  );
};

export default Emails;

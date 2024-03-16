"use client";
import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import { FaCheck, FaTicketAlt, FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setCurrentValue(false);
    const response = await fetch(
      "https://errornf.onrender.com/api/v1/users/logout",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    // setData(data.data);
    localStorage.clear();
    router.push("/");
    // setCurrentValue(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <FaUserCircle className={styles.icon} />
        <h2 style={{ margin: "10px 0", color: "blue" }}>Personal Details</h2>
        <div className={styles.div1}>
          <p>Anoop Kumar</p>
          <p>17-05-2003</p>
          <p>Male</p>
        </div>
        <div className={styles.div1}>
          <p>Mathura , Uttar Pradesh</p>
          <p>281201</p>
          <p>6396937375</p>
        </div>
        <h2 style={{ margin: "15px 0", color: "blue" }}>Documents</h2>

        <div className={styles.div1}>
          <p>
            Aadhar Card{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
          <p>
            Pan Card{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
          <p>
            Voter Id{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
          <p>
            Driving Licence{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
        </div>
        <div className={styles.div1}>
          <p>
            Ration Card{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
          <p>
            Birth Certificate{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
          <p>
            Password{" "}
            <span>
              <FaCheck style={{ color: "green" }} />
            </span>
          </p>
        </div>
        <h2 style={{ margin: "15px 0", color: "blue" }}>Complaint Tickets</h2>
        <div className={styles.div1}>
          <p>Ticket Raised</p>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className={styles.log_out}>
            logout
          </button>
        </form>
      </div>
    </div>
  );
}

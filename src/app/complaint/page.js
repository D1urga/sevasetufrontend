"use client";
import React, { useState, useEffect } from "react";
import styles from "./complaint.module.css";
import { FaArrowRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Complaint() {
  const [category, setCategory] = React.useState("Sas");
  const [issueType, setIssueType] = React.useState("SasA");
  const [sector, setSector] = React.useState("Sasa");

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
  const handleChange2 = (event) => {
    setIssueType(event.target.value);
  };
  const handleChange3 = (event) => {
    setSector(event.target.value);
  };
  const [anonData, setAnonData] = useState({
    title: "",
    description: "",
    category: "",
    issueType: "",
    sector: "",
  });
  const handleInputChange = (event) => {
    setAnonData({
      ...anonData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      `https://sevasetu.onrender.com/api/v1/complaint/postComplaint/${localStorage.getItem(
        "currentUser"
      )}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(anonData),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.outer_div}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <button className={styles.btn2}>raise Complaint</button>
          </div>
          <p style={{ margin: "10px" }}>Ticket Raised</p>
          <div className={styles.details}>
            <p className={styles.p1}>Aadhaar card still under update</p>

            <p className={styles.p2}>
              I am writing to bring to your attention the concerning delay in
              the delivery of my Aadhaar card. My enrollment for Aadhaar was
              completed on [Date of Enrollment] at [Location of Enrollment].
              Despite the standard processing time, which is usually within 90
              days as per guidelines, I have yet to receive my Aadhaar card.
            </p>
          </div>
          <p style={{ margin: "10px" }}>Ticket Processing</p>
          <div className={styles.details}>
            <p className={styles.p1}>Passport verification still pending</p>

            <p className={styles.p2}>
              It has now been 4 weeks since my application was submitted,
              surpassing the anticipated delivery date. I have made several
              attempts to inquire about the status of my passport through the
              designated helpline and online tracking system, but to no avail.
              The lack of communication and transparency regarding the delay is
              deeply concerning.
            </p>
          </div>{" "}
          <p style={{ margin: "10px" }}>Ticket Cancelled</p>
          <div className={styles.details}>
            <p className={styles.p1}>Voter ID application</p>

            <p className={styles.p2}>
              I am writing to express my deep concern and frustration regarding
              the significant delay in the delivery of my voter identification
              card. I applied for my voter ID on 3-4-2024, and it has been 3
              weeks since my application was submitted. Despite the assurance of
              timely delivery, I have yet to receive my voter ID.
            </p>
          </div>
          <p className={styles.p4}>Title</p>
          <input
            name="title"
            onChange={handleInputChange}
            value={anonData.title}
            className={styles.input}
            placeholder="enter title .."
          ></input>
          <p className={styles.p4}>Description</p>
          <textarea
            onChange={handleInputChange}
            name="description"
            value={anonData.description}
            className={styles.input1}
            placeholder="enter title .."
          ></textarea>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={anonData.category}
                  name="category"
                  label="category"
                  onChange={handleInputChange}
                >
                  <MenuItem value={"Agriculture & Cooperation "}>
                    Agriculture & Cooperation{" "}
                  </MenuItem>
                  <MenuItem value={"Housing & Urban Development"}>
                    Housing & Urban Development
                  </MenuItem>
                  <MenuItem value={"Information & Broadcasting"}>
                    Information & Broadcasting
                  </MenuItem>
                  <MenuItem value={"Employment & Labour"}>
                    Employment & Labour
                  </MenuItem>
                  <MenuItem value={"Law & Justice"}>Law & Justice</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }} className={styles.box}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Issue Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={anonData.issueType}
                  name="issueType"
                  label="issueType"
                  onChange={handleInputChange}
                >
                  <MenuItem value={"Website"}>Website</MenuItem>
                  <MenuItem value={"Manager"}>Manager</MenuItem>
                  <MenuItem value={"Location"}>Location</MenuItem>
                </Select>
              </FormControl>
            </Box>{" "}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={anonData.sector}
                  label="sector"
                  name="sector"
                  onChange={handleInputChange}
                >
                  <MenuItem value={"off site"}>Off site</MenuItem>
                  <MenuItem value={"on site"}>On site</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button type="submit" className={styles.btn}>
              confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

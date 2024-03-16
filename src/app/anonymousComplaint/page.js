"use client";

import React, { useState } from "react";
import styles from "./anonymousComplaint.module.css";
export default function AnonymouComplaint() {
  const [anonData, setAnonData] = useState({
    title: "",
    note: "",
    description: "",
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
      `https://sevasetu.onrender.com/api/v1/anonComplaint/postAnonComplaint/${localStorage.getItem(
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
  const value = ` Determining the exact number of girls who do not report complaints
            in India can be challenging due to various factors, including
            underreporting, lack of comprehensive data collection, and the
            sensitive nature of the issues involved. However, studies and
            surveys have indicated significant levels of underreporting of
            various forms of violence and harassment against girls and women in
            India. For example, according to the National Family Health Survey
            (NFHS) conducted in 2015-16, only about 1 in 4 women who experienced
            physical or sexual violence sought help or reported the incident to
            someone. This suggests that a substantial proportion of cases go
            unreported. Additionally, various studies, including those conducted
            by non-governmental organizations and academic institutions, have
            highlighted barriers to reporting, such as fear of reprisal, social
            stigma, lack of trust in the justice system, and cultural norms that
            discourage disclosure of abuse. While it's difficult to provide a
            precise number, it's evident that a significant portion of incidents
            involving girls and women in India goes unreported. Efforts to
            address this issue include awareness campaigns, legal reforms,
            strengthening support services for survivors, and promoting a
            culture of accountability and gender equality.`;
  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.outer_div}>
          <p className={styles.p1}>Anonymous Complaint</p>
          <p className={styles.p2}>{value}</p>

          <p className={styles.p3}>Feel free to complaint</p>
          <input
            name="title"
            onChange={handleInputChange}
            value={anonData.title}
            className={styles.input}
            placeholder="enter title .."
          ></input>
          <input
            name="note"
            onChange={handleInputChange}
            value={anonData.note}
            className={styles.input}
            placeholder="enter note .."
          ></input>
          <textarea
            name="description"
            value={anonData.description}
            onChange={handleInputChange}
            className={styles.input1}
            placeholder="enter description .."
          ></textarea>
          <br />
          <button type="submit" className={styles.btn}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

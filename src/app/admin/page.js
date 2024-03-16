"use client";
import React, { useState } from "react";
import styles from "./admin.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function Admin() {
  const [schemeData, setSchemeData] = useState({
    title: "",
    category: "",
    description: "",
  });
  const [womenData, setwomenData] = useState({
    title: "",
    description: "",
  });
  const handleInputChange = (event) => {
    setSchemeData({
      ...schemeData,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputChange2 = (event) => {
    setwomenData({
      ...womenData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      "https://sevasetu.onrender.com/api/v1/schemes/postScheme",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schemeData),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    // setIsUploading(true);
    const response = await fetch(
      "https://sevasetu.onrender.com/api/v1/womenEmp/postWomenEmp",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(womenData),
      }
    );
    // setIsUploading(false);
    // const data = await response.json();
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <FaUserCircle className={styles.icon} />
          <p>Anoop chaudhary</p>
          <p>
            Specify the maximum loan amount, repayment terms, and interest
            rates. Will there be any subsidies or concessions? Include any
            unique features, such as insurance schemes, training programs, or
            technical assistance offered with the loan. Consider the
            environmental impact: Will the loan promote sustainable farming
            practices?
          </p>
          <p></p>
        </div>
        <div className={styles.div2}>
          <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input
              onChange={handleInputChange}
              name="title"
              value={schemeData.title}
              className={styles.input}
              placeholder="ex .. farmer loan"
            ></input>
            <p>Category</p>
            <input
              onChange={handleInputChange}
              name="category"
              value={schemeData.category}
              className={styles.input}
              placeholder="ex .. agriculture"
            ></input>
            <p>Description</p>
            <textarea
              onChange={handleInputChange}
              name="description"
              value={schemeData.description}
              className={styles.input1}
              placeholder="ex .. description"
            ></textarea>
            <br />
            <div className={styles.btn_div}>
              <button type="submit" className={styles.btn}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.outer_div2}>
        <h3 style={{ color: "blue" }}>women-empowerment</h3>
        <form onSubmit={handleSubmit2}>
          {" "}
          <div className={styles.women_empowerment}>
            <p>Title</p>
            <input
              onChange={handleInputChange2}
              name="title"
              value={womenData.title}
              className={styles.input2}
              placeholder="ex .. agriculture"
            ></input>
            <p>Description</p>
            <textarea
              onChange={handleInputChange2}
              name="description"
              value={womenData.description}
              className={styles.input3}
              placeholder="ex .. description"
            ></textarea>
            <br />
            <div className={styles.btns}>
              <button type="submit" className={styles.btn}>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

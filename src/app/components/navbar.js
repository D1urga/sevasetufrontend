"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import img1 from "../images/national_emblem.svg";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
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
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <FaBars
          className={styles.menubar}
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        />
        <div className={styles.title_div}>
          <Image src={img1} className={styles.emblem}></Image>
          <p className={styles.p1}>SevaSetu.gov.in</p>
          <p className={styles.p2}>
            Bridging Services,
            <br /> Empowering Lives.
          </p>
        </div>
      </div>
      <ul className={isNavbarOpen ? styles.list1 : styles.list}>
        <li>
          <Link href="/landingPage">Home</Link>
        </li>
        <li>
          <Link href="/reciever">Documents</Link>
        </li>
        {/* <li>
          <Link href="">donate</Link>
        </li> */}
        <li>
          <Link href="./indivisualDonation">Scheme</Link>
        </li>
        <li>
          <Link href="./aboutUs">Complaints</Link>
        </li>
      </ul>

      <div className={styles.profile}>
        <FaUserCircle className={styles.profile_icon} />
        <p>profile</p>
      </div>
    </div>
  );
}

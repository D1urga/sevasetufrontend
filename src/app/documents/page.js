import React from "react";
import styles from "./documents.module.css";
import HorizontalLinearStepper from "../components/test";
import img1 from "../images/anpic2.jpeg";
import Image from "next/image";
import img2 from "../images/icon.svg";
export default function Documents() {
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}></div>
      <div className={styles.mainpage}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              className={styles.emblem}
            />
            <Image src={img2} className={styles.icon}></Image>
          </div>
          <div className={styles.card_body}>
            <Image src={img1} className={styles.profile_pic}></Image>
            <div>
              <p>Name: Anoop Kumar</p>
              <p>DOB: XX_XX-XXXX</p>
              <p>Gender: MALE</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              className={styles.qr}
            />
          </div>
          <div className={styles.aadhaar_no}>
            <h2>0000 1111 2222</h2>
          </div>

          <div className={styles.card_footer}>
            <p>मेरा आधार मेरी पहचान</p>
          </div>
        </div>
      </div>
      <HorizontalLinearStepper />
      <div className={styles.faq_maindiv}>
        <h2 style={{ margin: "10px 0" }}>FAQs</h2>
        <div className={styles.div1}>
          <p className={styles.p1}>How to update address ?</p>
          <p className={styles.p2}>
            Select Address Update: Once logged in, look for the "Address Update"
            section. There might be an option for "Update Aadhaar" or "Update
            Demographics Data" - choose the one ...
          </p>
        </div>
        <div className={styles.div1}>
          <p className={styles.p1}>How to update name ?</p>
          <p className={styles.p2}>
            You can download the Aadhaar update form (Form - Aadhaar Data
            Update/Correction) from the UIDAI website or get it from the
            enrollment center. Fill out the form with the required details
          </p>
        </div>
        <div className={styles.div1}>
          <p className={styles.p1}>How to update photo ?</p>
          <p className={styles.p2}>
            Upload the new photo that you want to replace the existing one on
            your Aadhaar card. Make sure the photo meets the specified
            guidelines in terms of size, format, and background color.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./insurance.module.css";

export default function Insurance() {
  const list = [
    {
      title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      des: `This scheme provides accidental death and disability
       insurance cover to
       individuals between the ages of 18 to 70 years
        It aims to provide affordable insurance to all, including men and women.`,
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <h3 style={{ color: "blue", margin: "20px 0" }}>Insurances</h3>
        <div className={styles.cont_div}>
          {list &&
            list.map((data, index) => (
              <div key={index} className={styles.tile_div}>
                <p className={styles.p1}>{data.title}</p>
                <p className={styles.p2}>{data.des}</p>
                <button className={styles.btn}>visit</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

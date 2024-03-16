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
    {
      title: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
      des: `PMJJBY is a life insurance scheme that provides a renewable one-year life cover of ₹2 lakh (rupees) 
      to all savings bank account holders between the ages of 18 to 50 years, covering death due to any reason.`,
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      des: `This crop insurance scheme provides insurance coverage and financial support to farmers in case of crop 
      failure due to natural calamities, pests, or diseases. It's available to all farmers, including both men and women`,
    },
    {
      title: "Atal Pension Yojana (APY)",
      des: `APY is a pension scheme aimed at unorganized
       sector workers, including men and women,
        providing guaranteed minimum pension benefits upon retirement.`,
    },
    {
      title: "Aam Aadmi Bima Yojana (AABY)",
      des: `AABY is a social security insurance scheme targeted
       at rural landless households, providing coverage for natural
        and accidental death, and disability.`,
    },
    {
      title: "Rashtriya Swasthya Bima Yojana (RSBY)",
      des: `Although primarily a health insurance scheme, RSBY aims to provide health coverage to
       below-poverty-line (BPL) families and other eligible categories 
       of workers in the unorganized sector, including men and women.`,
    },
    {
      title: "Janashree Bima Yojana (JBY)",
      des: ` JBY is a group insurance scheme for the 
      benefit of the unorganized sector workers, providing
       coverage against death and disability.`,
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

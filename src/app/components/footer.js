import React from "react";
import styles from "./styles/footer.module.css";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.main_div}>
      <div className={styles.intro1}>
        <p>HELP US IN MAKING IT BETTER</p>
        <p>
          We welcome your participation in enhancing the directory further and
          also invite your comments and suggestions for improvement
        </p>
      </div>
      <div className={styles.footer_div}>
        <div className={styles.div1}>
          <p className={styles.p1}>Information</p>
          <p className={styles.p2}>agriculture</p>
          <p className={styles.p2}>commerce</p>
          <p className={styles.p2}>defence</p>
          <p className={styles.p2}>environment</p>
          <p className={styles.p2}>forest</p>
          <p className={styles.p2}>food</p>
          <p className={styles.p2}>distribution</p>
          <p className={styles.p2}>governance</p>
          <p className={styles.p2}>administration</p>
          <p className={styles.p2}>housing</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.p1}>industries</p>
          <p className={styles.p2}>broadcasting</p>
          <p className={styles.p2}>law</p>
          <p className={styles.p2}>justice</p>
          <p className={styles.p2}>rural</p>
          <p className={styles.p2}>developement</p>
          <p className={styles.p2}>travel</p>
          <p className={styles.p2}>tourism</p>
          <p className={styles.p2}>art</p>
          <p className={styles.p2}>culture</p>
          <p className={styles.p2}>communication</p>
        </div>
        <div className={styles.div3}>
          <p className={styles.p1}>education</p>
          <p className={styles.p2}>finance</p>
          <p className={styles.p2}>taxes</p>
          <p className={styles.p2}>foreign affairs</p>
          <p className={styles.p2}>health</p>
          <p className={styles.p2}>home affairs</p>
          <p className={styles.p2}>infrastructure</p>
          <p className={styles.p2}>labour</p>
          <p className={styles.p2}>power</p>
          <p className={styles.p2}>energy</p>
          <p className={styles.p2}>science</p>
        </div>
        <div className={styles.div4}>
          <p className={styles.p1}>Connect with us</p>
          <p className={styles.p2}>+91 -1800 2324 3434</p>
          <p className={styles.p2}>+91 -1800 7567 1233</p>{" "}
          <p className={styles.p2}>+91 -1800 9879 3534</p>
          <p className={styles.p2}>governmenthelpline1@gov.in</p>
          <p className={styles.p2}>governmenthelpline2@gov.in</p>{" "}
          <div className={styles.icons_div}>
            <FaGoogle className={styles.icons_div_icon} />
            <FaInstagram className={styles.icons_div_icon} />
            <FaFacebook className={styles.icons_div_icon} />
            <FaTwitter className={styles.icons_div_icon} />
          </div>
        </div>
      </div>
      <div className={styles.intro2}>
        <p>Developed by anoop chaudhary</p>

        <p>Designed by rion Dsilva</p>
      </div>
    </div>
  );
}

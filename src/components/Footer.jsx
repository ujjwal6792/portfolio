import React from "react";
import styles from "../style/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>Email</li>
      </ul>
      <button className={styles.resume}>
        <a href="https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/Ujjwal%20resume.pdf?alt=media&token=71e7696a-d3f8-4400-80ee-1ff1fede0bcd" download>Resume</a>
      </button>
    </div>
  );
}

export default Footer;

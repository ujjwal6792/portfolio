import React from "react";
import styles from "../style/Footer.module.css";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

function Footer() {
  return (<>
    <div className={styles.footerMain}>
      <ul>
        <a href="https://www.linkedin.com/in/ujjwal--sharma/" target="_blank">
          <li>LinkedIn</li>
        </a>
        <a href="https://github.com/ujjwal6792" target="_blank">
          <li>Github</li>{" "}
        </a>
        <a href="mailto:ujjwal.sharma6792@gmail.com">
          <li>Email</li>
        </a>
      </ul>

      <button className={styles.resume}>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/Ujjwal%20resume.pdf?alt=media&token=71e7696a-d3f8-4400-80ee-1ff1fede0bcd"
          download
        >
          Resume
        </a>
      </button>

      <button className={styles.scrollTop} onClick={()=>{
        window.scrollTo(0,0);
      }}>
        <BsFillArrowUpCircleFill/>
      </button>
    </div>
  </>);
}

export default Footer;

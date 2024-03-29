import React from "react";
import styles from "../style/Footer.module.css";
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import resume from "../file/resume";

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
          href={resume.link}
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

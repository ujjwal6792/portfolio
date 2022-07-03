import React from "react";
import styles from "../style/AboutSection.module.css";
import illustration2 from "../images/illustration2.webp"

function AboutSection(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text} style={props.textSize}>
         {props.text}
        </div>
        <div className={styles.endImage}>
           <img src={illustration2} alt="" /> 
        </div>
      </div>
    </>
  );
}

export default AboutSection;

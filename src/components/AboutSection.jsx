import React from "react";
import styles from "../style/AboutSection.module.css";
import illustration2 from "../images/illustration2.webp";
import illustration2Mob from "../images/illustration2mob.webp";

function AboutSection(props) {
  return (
    <>
      <div className={styles.containerAbout}>
        <div className={styles.text} style={props.textSize}>
          {props.text}
        </div>
        <div className={styles.endImage}>
          <img
            src={illustration2Mob}
            srcSet={`${illustration2Mob} 300vw, ${illustration2Mob} 768vw, ${illustration2} 1280px`}
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;

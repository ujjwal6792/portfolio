import React from "react";
import styles from "../style/AboutSection.module.css";
import illustration2 from "../images/illustration2.webp"

function AboutSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            I'm a junior developer who has recently started my journey as a web
            developer.
          </p>
          <p>
            I'm a self-motivated learner with strong organisation, time
            management & communication skills.
          </p>
          <p>
            I'm able to work independently & collaboratively in a team with a
            meticulous attention to detail.
          </p>
        </div>
        <div className={styles.endImage}>
           <img src={illustration2} alt="" /> 
        </div>
      </div>
    </>
  );
}

export default AboutSection;

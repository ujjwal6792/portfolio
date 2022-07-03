import React from "react";
import styles from "../style/Skills.module.css";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.section}>
          <span> JavaScript</span>
          <span> React</span>
          <span> Next.js</span>
          <span> Firebase</span>
          <span> HTML</span>
          <span> Css3</span>
      </div> 

      <h5> Worked With</h5>
      
      <div className={styles.section}>
      <span> Node.js</span>
      <span> Express.js</span>
      <span> MongoDB</span>
      <span> Gatsby</span>
      <span> Docker</span>
      </div>
    </div>
  );
}

export default Skills;

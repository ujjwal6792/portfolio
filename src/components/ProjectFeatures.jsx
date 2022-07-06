import React from "react";
import styles from "../style/ProjectPage.module.css";

function ProjectFeatures(props) {
  return (
    <div className={styles.project}>
      <section className={styles.sectionLayout}>
        <div>
          <h2>{props.description}</h2>
          <p className={styles.pPara}>{props.intro}</p>
          {props.list.map((item)=>{
            return <li className= {styles.liPoints}>{item}</li>
            })}
          <p>{props.snip}</p>
        </div>

        <div className={styles.ProjectFeaturesimgbox}>
            
        {props.img.map((item)=>{
            return <img className={styles.img43} src={item} alt="img" />
            })}
            {/* <img className={styles.imgmb} src={props.imgm} alt="img" /> */}
        </div>
      </section>
    </div>
  );
}

export default ProjectFeatures;

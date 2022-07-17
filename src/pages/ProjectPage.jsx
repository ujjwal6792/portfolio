import React, {useLayoutEffect} from "react";
import styles from "../style/ProjectPage.module.css";
import ProjectFeatures from "../components/ProjectFeatures";

function ProductPage(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <h1>{props.name}</h1>
      <div className={styles.project}>
      <img src={props.demoImage} className={styles.demoImage} alt="project demo image" />
        {/* introduction */}
        <section className={styles.sectionLayout}>
          <div>
            <h2>{props.introHeading}</h2>
            <p className={styles.pPara}>{props.introText}</p>

            {props.introLi.map((item)=>{
            return <li className= {styles.liPoints}>{item}</li>
            })}

          </div>
          <img className={styles.img43} src={props.introImg} alt="homepage" />
        </section>

        {/* project feature description */}
        {props.projectFeatures.map((item)=>{ return(
          <ProjectFeatures
          description= {item.featureDescription}
          intro= {item.featureIntro}
          img= {item.image}
          imgm ={item.imageMobile}
          list={item.listItems}
          snip={item.snippet}
          />
       ) })}
      </div>
    </>
  );
}

export default ProductPage;

import React from "react";
import styles from "../style/Home.module.css";
import { FcMindMap } from "react-icons/fc";
import Clip from "../images/illustration1.webp";
import Card from "../components/Card";
import UH from "../images/uniquehandlooms/uh1.webp";
import AM from "../images/acrossme/am1.webp";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.title}>
          <h3>
            Hello. <FcMindMap /> <br /> I am Ujjwal
          </h3>
        </div>
        <div className={styles.graphic}>
          <img src={Clip} alt="" />
        </div>
      </div>
      <div className={styles.exButton}>
        <button>Explore More</button>
      </div>
      
      <h1>About</h1>
      <AboutSection/>

      <h1>Projects</h1>
      <div className={styles.project}>
        <div className={styles.projectCards}>
          <Card
            img={UH}
            name={"Unique Handlooms"}
            skills={"React, Firebase"}
            website="https://unique-handlooms.web.app/"
            github=""
            demo=""
          />

          <Card
            img={AM}
            name={"AcrossMe"}
            skills={"React, Firebase"}
            website="https://acrossme.in/"
            github=""
            demo=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;

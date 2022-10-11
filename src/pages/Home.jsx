import React from "react";
import styles from "../style/Home.module.css";
import { FcMindMap } from "react-icons/fc";
import Clip from "../images/illustration1.webp";
import ClipMob from "../images/illustration1mob.webp";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import Project from "../components/Project";

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
          <img
            src={ClipMob}
            srcSet={`${ClipMob} 300w, ${ClipMob} 768w, ${Clip} 1280w`}
          />
        </div>
      </div>
      <div className={styles.exButton}>
        <button
          onClick={() => {
            const skills = document.getElementById("skills");
            skills.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Explore More
        </button>
      </div>

      <h1>About</h1>
      <AboutSection
        text={
          <>
            {" "}
            <p>
              Hi, I'm a Web developer working with Web3 technologies to empower your digital identity and institutional certifications.
            </p>
            <p>
              I'm a self-motivated learner with strong organisation, time
              management & communication skills.
            </p>
            <p>
              I'm able to work independently & collaboratively in a team with a
              meticulous attention to detail.
            </p>{" "}
          </>
        }
      />

      <div id="skills">
        <h1>Skills</h1>
        <Skills />
      </div>

      <Project />
    </>
  );
}

export default Home;

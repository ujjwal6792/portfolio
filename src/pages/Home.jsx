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
      <div className='mt-20 flex flex-wrap justify-center items-center dark:text-new-white'>
        <div className={'flex justify-center flex-1'}>
          <h3 className="text-7xl font-bold">
            Hello. 
            <FcMindMap className="filter hue-rotate-30 inline-block m-4" /> 
            <br/> I am Ujjwal
          </h3>
        </div>
        <div className={'grid flex-1 w-screen items-center justify-center'}>
          <img
          className="p-0 w-home-image"
            src={ClipMob}
            srcSet={`${ClipMob} 300w, ${ClipMob} 768w, ${Clip} 1280w`}
          />
        </div>
      </div>
      <div className={'pt-8 flex justify-center items-center'}>
        <button
          onClick={() => {
            const skills = document.getElementById("skills");
            skills.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className='cursor-pointer bg-button-yellow px-[.6em] py-[1.3em] font-extrabold text-lg'
          >
            Explore More
        </button>
      </div>

      <h1 className="dark:text-new-white text-home font-bold font">About</h1>
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
            </p>
          </>
        }
      />

      <div id="skills">
        <h1 className="dark:text-new-white text-home font-bold">Skills</h1>
        <Skills />
      </div>

      <Project />
    </>
  );
}

export default Home;

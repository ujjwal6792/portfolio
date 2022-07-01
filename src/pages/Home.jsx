import React from 'react'
import styles from "../style/Home.module.css"
import {FcMindMap} from "react-icons/fc"
import Clip from "../images/clip.webp"
import Card from '../components/Card'

function Home() {
  return (
  <>
    <div className={styles.home}>
      <div className={styles.title}>
        <h3>Hello. <FcMindMap/> <br/> I am Ujjwal</h3>
      </div>
      <div className={styles.graphic}>
        <img src={Clip} alt="" />
      </div>
    </div>
    <div className={styles.exButton}>
      <button>Explore More</button>
      </div>


    <div className={styles.project}>
      <h1>Projects</h1>
      <div className={styles.projectCards}>
      <Card name={'Unique Handlooms'} skills={'React, Firebase'} website ="" github = "" demo= ""/>
      <Card name={'AcrossMe'} skills={'React, Firebase'} website ="" github = "" demo= ""/>
      </div>
    </div>
 
  </>
  )
}

export default Home
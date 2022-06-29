import React from 'react'
import styles from "../style/Home.module.css"
import {FcMindMap} from "react-icons/fc"

function Home() {
  return (
  <>
    <div className={styles.home}>
      <div className={styles.title}>
        <h3>Hello. <FcMindMap/> <br/> I am Ujjwal</h3>
      </div>
      <div className={styles.graphic}></div>
      <div className={styles.button}></div>
    </div>

  </>
  )
}

export default Home
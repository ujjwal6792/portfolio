import React from 'react'
import AboutSection from '../components/AboutSection'
import styles from '../style/About.module.css'    

function About() {
  return (
    <div className={styles.about}>
        <section>
          <AboutSection
           text={
            <>
              <h2 style={{textAlign:`left`}}>Hi, I am Ujjwal</h2>
              <p style={{textAlign:`left`}}>
                I'm a self taught developer who got into about webapp developement and web designing after starting his journey in tech as a graphics designer and software support engineer while learning new technologies and skills throughout my career.
              </p>
              <p style={{textAlign:`left`}}>
              Always surrounded with computers as a child, I grew interst in assembling Cpus, playing around with softwares and operating systems. Though now, I enjoy my DIY projects, handyman works and mechanical keyboard modding.
              </p>
            </>
          }
          textSize = {{fontSize: `1.2rem`}}
          />
        </section>
    </div>
  )
}

export default About
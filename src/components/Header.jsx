import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/Header.module.css"
import Logo from "../images/ujjwallogo.webp"
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi"
import {BiMenuAltLeft,BiX} from "react-icons/bi"


function Header() {
  const[navOpen, setNavOpen]= useState(false)
  return (
    <>
    <nav className={navOpen?styles.navOpen: ""}>
      
      <div className={styles.menu}>
       <p onClick={()=>{setNavOpen(!navOpen)}}>
        {navOpen? <BiX/>: <BiMenuAltLeft/>}
        </p> 
      </div>
      <Link to ="/">
      <div className={navOpen? styles.logo: styles.hidden}>
       <img src={Logo} alt="Logo" /> 
      </div>
      </Link>
      <div className={navOpen? styles.items: styles.hidden}>
        <ul>
        <Link to ="/about"> <li>About</li> </Link>
        <Link to ="/projects"> <li>Projects</li> </Link>
        <Link to ="/resume">  <li>Resume</li> </Link>
        <Link to ="/contact">  <li>Contact</li> </Link>
        </ul>
      </div>
      <div className={navOpen? styles.contact: styles.hidden}>
        <ul>
          <li><FiGithub/></li>
          <li><FiLinkedin/></li>
          <li> 
            <a href="mailto:ujjwal.sharma6792@gmail.com">
            <FiMail/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header
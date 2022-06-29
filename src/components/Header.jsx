import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/Header.module.css"
import Logo from "../images/ujjwallogo.webp"
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi"
import {BiMenuAltLeft,BiX} from "react-icons/bi"


function Header() {
  const[navOpen, setNavOpen]= useState(true)
  const displayWidth = document.body.offsetWidth

  const menuControl = () => {
    if (displayWidth <= 768){
      setNavOpen(!navOpen)
    }
  }

  return (
    <>
    {console.log(document.body.offsetWidth)}
    <nav className={navOpen?styles.navOpen: ""}>
        {/* menu icon */}      
      <div className={styles.menu}>
       <p onClick={menuControl}>
        {navOpen? <BiX/>: <BiMenuAltLeft/>}
        </p> 
      </div>
      {/* logo */}
      <Link to ="/" onClick={menuControl}>
      <div className={navOpen? styles.logo: styles.hidden}>
       <img src={Logo} alt="Logo" /> 
      </div>
      </Link>
      {/* nav items */}
      <div className={navOpen? styles.items: styles.hidden}>
        <ul>
        <Link to ="/about" onClick={menuControl}> 
        <li>About</li> </Link>
        <Link to ="/projects" onClick={menuControl}> 
        <li>Projects</li> </Link>
        <Link to ="/resume" onClick={menuControl}>  
        <li>Resume</li> </Link>
        <Link to ="/contact" onClick={menuControl}>  
        <li>Contact</li> </Link>
        </ul>
      </div>
      {/* nav contacts */}
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
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/Header.module.css"
import Logo from "../images/ujjwallogo.webp"
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi"
import {BiMenuAltLeft,BiX} from "react-icons/bi"


function Header() {
  const[navOpen, setNavOpen]= useState(false)
  const displayWidth = document.body.offsetWidth

  useEffect(()  => { 
    function nav(){
    if (displayWidth>768) {
      setNavOpen(true)
    }}
    nav();
  },[])

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
        <Link to ="/about" onClick={menuControl}> 
          <li><FiGithub/></li>
        </Link>
        <Link to ="/about" onClick={menuControl}> 
          <li><FiLinkedin/></li>
        </Link>  
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
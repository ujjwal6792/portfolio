import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Header.module.css";
import Logo from "../images/ujjwallogo.webp";
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from "react-icons/fi";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

function Header(props) {
  const {theme,themeSetter} = props;
  const [navOpen, setNavOpen] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(document.body.offsetWidth);
// check windows width
  useEffect(() => {
    window.onresize = resize;
    function resize() {
      setDisplayWidth(document.body.offsetWidth);
    }
  });
// sets header visibility dependning on windows width
  useEffect(() => {
    function nav() {
      if (displayWidth > 768) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    }
    nav();
  }, [displayWidth]);
// Adds menu hidden control to mobile only on element click
  const menuControl = () => {
    if (displayWidth <= 768) {
      setNavOpen(!navOpen);
    }
  };

  return (

      <nav className='flex justify-between items-center h-16 dark:text-new-white'>
        {/* menu icon
        <div className=''>
          <p onClick={menuControl}>{navOpen ? <BiX /> : <BiMenuAltLeft />}</p>
        </div> */}
        {/* logo */}
        <Link to="/" onClick={menuControl}>
          <div >
            <img className='h-8 transition-all dark:filter dark:invert-[200] dark:saturate-150' src={Logo} alt="Logo" />
          </div>
        </Link>
        {/* nav items */}
        <div className=''>
          <ul>
            <Link to="/about" onClick={menuControl}>
              <li className="pb-1 transition-all border-b-2 dark:hover:border-new-cyan hover:border-new-blue">About</li>
            </Link>
            <Link to="/projects" onClick={menuControl}>
              <li className="pb-1 transition-all border-b-2 dark:hover:border-new-cyan hover:border-new-blue">Projects</li>
            </Link>
            <Link to="/resume" onClick={menuControl}>
              <li className="pb-1 transition-all border-b-2 dark:hover:border-new-cyan hover:border-new-blue">Resume</li>
            </Link>
            <Link to="/contact" onClick={menuControl}>
              <li className="pb-1 transition-all border-b-2 dark:hover:border-new-cyan hover:border-new-blue">Contact</li>
            </Link>
          </ul>
        </div>
        {/* nav contacts */}
        <div className=''>
          <ul>
            <a
              href="https://github.com/ujjwal6792"
              target="_blank"
              onClick={menuControl}
            >
              <li>
                <FiGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwal--sharma/"
              target="_blank"
              onClick={menuControl}
            >
              <li>
                <FiLinkedin />
              </li>
            </a>
            <li>
              <a href="mailto:ujjwal.sharma6792@gmail.com">
                <FiMail />
              </a>
            </li>
            <li onClick={()=>themeSetter(e=>e==='light'?'dark':'light')}>
                {theme==='light'?
                <FiSun/>
                :
                <FiMoon/>  
              }
            </li>
          </ul>
        </div>
      </nav>

  );
}

export default Header;

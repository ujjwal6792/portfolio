import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Header.module.css";
import Logo from "../images/ujjwallogo.webp";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

function Header() {
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
    <>
      <nav className={navOpen ? styles.navOpen : ""}>
        {/* menu icon */}
        <div className={styles.menu}>
          <p onClick={menuControl}>{navOpen ? <BiX /> : <BiMenuAltLeft />}</p>
        </div>
        {/* logo */}
        <Link to="/" onClick={menuControl}>
          <div className={navOpen ? styles.logo : styles.hidden}>
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        {/* nav items */}
        <div className={navOpen ? styles.items : styles.hidden}>
          <ul>
            <Link to="/about" onClick={menuControl}>
              <li>About</li>{" "}
            </Link>
            <Link to="/projects" onClick={menuControl}>
              <li>Projects</li>{" "}
            </Link>
            <Link to="/resume" onClick={menuControl}>
              <li>Resume</li>{" "}
            </Link>
            <Link to="/contact" onClick={menuControl}>
              <li>Contact</li>{" "}
            </Link>
          </ul>
        </div>
        {/* nav contacts */}
        <div className={navOpen ? styles.contact : styles.hidden}>
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
              href="https://www.linkedin.com/in/ujjwal-sharma-41525b242/"
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Card.module.css";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      
      <div className={styles.card}>
      <a href={props.website} target="_blank">
        <div className={styles.cardInfo}>
          <div className={styles.cardAvatar}>
            <img src={props.img} alt="projectimage" />
          </div>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardSubtitle}>{props.skills}</div>
        </div>
        </a>
        <ul className={styles.cardSocial}>
          <a href={props.website} target="_blank">
            <li className={styles.cardSocialItem}>
              <CgWebsite />
            </li>
          </a>

          <a href={props.website} target="_blank">
            <li className={styles.cardSocialItem}>
              <p>Demo</p>
            </li>
          </a>

          <a href={props.github} target="_blank">
            <li className={styles.cardSocialItem}>
              <FiGithub />
            </li>
          </a>
        </ul>
      </div>

      <div className={styles.descContainer}>
        <div className={styles.desc}>{props.desc}</div>
        
        <Link to ={props.link}>
          <button className={styles.cta}>
            <span>Learn More</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

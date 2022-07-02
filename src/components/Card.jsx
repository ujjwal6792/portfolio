import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Card.module.css";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <div className={styles.cardAvatar}>
            <img src={props.img} alt="projectimage" />
          </div>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardSubtitle}>{props.skills}</div>
        </div>
        <ul className={styles.cardSocial}>
          <a href={props.website} target="_blank">
            <li className={styles.cardSocialItem}>
              <CgWebsite />
            </li>
          </a>

          <a href={props.demo} target="_blank">
            <li className={styles.cardSocialItem}>
              <p>Demo</p>
            </li>
          </a >

          <a href={props.github} target="_blank">
            <li className={styles.cardSocialItem}>
              <FiGithub />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Card;

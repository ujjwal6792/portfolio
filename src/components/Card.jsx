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
          <div className={styles.cardAvatar}></div>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardSubtitle}>{props.skills}</div>
        </div>
        <ul className={styles.cardSocial}>
          <Link to={props.website}>
            <li className={styles.cardSocialItem}>
              <CgWebsite />
            </li>
          </Link>

          <Link to={props.demo}>
            <li className={styles.cardSocialItem}>
              <p>Demo</p>
            </li>
          </Link >

          <Link to={props.github}>
            <li className={styles.cardSocialItem}>
              <FiGithub />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Card;

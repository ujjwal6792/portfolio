import React from 'react'
import styles from "../style/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
        <ul>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Email</li>
        </ul>
        <button className={styles.resume}>Resume</button>
    </div>
  )
}

export default Footer
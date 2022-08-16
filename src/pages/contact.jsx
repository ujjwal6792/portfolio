import React, { useRef, useState } from "react";
import styles from "../style/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function contact() {
  let form = useRef();
  const [emailSent, useEmailSent] = useState(null);
  const [emailError, useEmailError] = useState(null);
  const Navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ujjwal_gmail",
        "template_yr4stan",
        form.current,
        "DAmCJEFtMko9vNg1_"
      )
      .then((result) => {
        useEmailSent(true);
      }).finally(()=>{
        setTimeout(() => {
          useEmailSent(false);
        }, 2000);
        e.target.reset()
      }).finally(
        setTimeout(()=>
        Navigate('/'), 6000
        )
      )
      .catch((error) => {
        useEmailError(error.text);
      });
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label htmlFor="name">
          <h4>Name</h4>
        </label>
        <input type="text" id="name" name="user_name" placeholder="Name" />
        <label htmlFor="email">
          <h4>Your email</h4>
        </label>
        <input type="email" id="email" name="user_email" placeholder="Email" />
        <label htmlFor="text">
          <h4>Your message</h4>
        </label>
        <textarea
          name="message"
          id="text"
          cols="30"
          rows="4"
          placeholder="Your message here"
        />
        <button type="submit" className={styles.exButton}>
          {emailSent ? "SENT" : "send"}
        </button>
      </form>
      {emailError ?? <h5>{emailError}</h5>}
    </div>
  );
}

export default contact;

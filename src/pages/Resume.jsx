import React from "react";
import styles from "../style/Resume.module.css";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {FiGithub} from "react-icons/fi"
import {FiMail} from "react-icons/fi"
import {FiPhone} from "react-icons/fi"
import {CgWebsite} from "react-icons/cg"

function Resume() {
  return (
    <>
      <h1>Resume</h1>

      <main>
        {/* left section */}
        <div className={styles.left}>
          <section className={styles.title}>
            <h1>Ujjwal Sharma</h1>
            <p>
              Web Developer with a proven ability to collaborate effectively
              with team members. With a passion for web development and design,
              worked through 1000+ hour coding sessions to learn and sharpen my
              existing skills. Ready to apply my passion for coding to a
              talented engineering team to develop quality solutions.
            </p>
          </section>
          <section>
            <h2>EXPERIENCE</h2>
            <h3>RHS Dynamic Solutions Pvt Ltd</h3>
            <h4> - Software Specialist</h4>
            <small>January 2020 - PRESENT</small>
            <ul>
              <li>
                Perform administrator functions and provide support within the
                Gem platform.
              </li>
              <li>
                Tested software for bugs and operating speed, fixing bugs and
                documenting processes to increase efficiency.
              </li>
              <li>
                {" "}
                Providing Custom Solutions in web development to clients.
              </li>
              <li>
                Perform the day-to-day functions of the technology assigned.
              </li>
              <li>
                Perform regular and critical maintenance activities as required
                during or after business hours.
              </li>
            </ul>
          </section>
          <section>
            <h2>PROJECTS</h2>
            <h3>Unique Handlooms</h3>
            <h4> - Developer, Designer</h4>
            <small>June 2022</small>
            <ul>
              <li>
                Build a marketplace for an interior design and handlooms
                business
              </li>
              <li>
                Used React, Context API, Firebase to implement product selection
                and placing purchase order
              </li>
              <li>
                Used techniques such as paginations and image optimization to
                lower the load time
              </li>
              <li>
                Added CRUD for the admins to add/edit/delete products as well as
                add new categories
              </li>
              <li>
                Designed the Layout, Logo and illustrations using Figma and
                Canva
              </li>
              <li>
                Provided valuable insights on product placement and display
              </li>
            </ul>
          </section>
          <section>
            <h3>AcrossMe</h3>
            <h4> - Developer, Designer</h4>
            <small>April 2022</small>
            <ul>
              <li>
                Built a full-stack web app to give users a seamless marketplace
                experience and reach.
              </li>
              <li>
                Implemented top deals section with auto delete from database
                after expiration
              </li>
              <li>
                Used react and firebase to give Auth, User customizations and
                CRUD admin features to customer
              </li>
              <li>Design UI, Logo and marketing Ideas for the project</li>
              <li>Implemented website and Android app with a Team</li>
            </ul>
          </section>
        </div>
        {/* right section */}
        <div className={styles.right}>
          <section className={styles.contact}>
            <h2></h2>
            <li> <HiOutlineLocationMarker/> Ghaziabad, U.P.</li>
            <li> <FiPhone/> +91-8287716284</li>
            <li> <FiMail/> Ujjwalsharma.6792@gmail.com</li>
            <li> <CgWebsite/> https://ujjwalsharma.live</li>
            <li> <FiGithub/> https://github.com/ujjwal6792</li>
          </section>
          <section>
            <h2>SKILLS</h2>
            <li> ReactJs/Redux</li>
            <li> TypeScript</li>
            <li> JavaScript</li>
            <li> HTML5/CSS3 </li>
            <li> Mongo DB</li>
            <li> Firebase</li>
            <li> Figma</li>
          </section>
          <section>
            <h2>WORKED IN</h2>
            <li> Node.Js</li>
            <li> ExpressJs</li>
            <li> Gatsby</li>
            <li> Docker</li>
            <li> Tailwind Css</li>
          </section>
          <section>
            <h2>CERTIFICATION</h2>
            <li>
              {" "}
              React – The complete guide (incl Hooks, React Router, Redux)
            </li>
            <small>2022, Udemy</small>
            <li>Understanding TypeScript – 2022 Edition</li>
            <small>2022, Udemy</small>
            <li> The complete JavaScript Course 2022: from zero to expert!</li>
            <small>2022, Udemy</small>
          </section>

          <section>
            <h2>EDUCATION</h2>
            <li> Int. BTech/MTech in Electrical Engineering</li>
            <small>2013-2018 </small>
            <li>- Gautam Buddha University, Greater Noida</li>
          </section>
          <section>
            <h2>LANGUAGES</h2>
            <li> English, Hindi, Punjabi</li>
          </section>
        </div>
      </main>
    </>
  );
}

export default Resume;

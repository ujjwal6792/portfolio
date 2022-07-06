import React from "react";
import Card from "./Card";
import UH from "../images/uniquehandlooms/uh1.webp";
import AM from "../images/acrossme/am1.webp";
import styles from "../style/Project.module.css";

function Project() {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.project}>
        <div className={styles.projectCards}>
          <Card
            img={UH}
            name={"Unique Handlooms"}
            skills={"React, Firebase"}
            website="https://unique-handlooms.web.app/"
            github="https://github.com/ujjwal6792/uniqueHandloomDemo"
            demo=""
            desc={
              <>
                <p>
                  {" "}
                  This full-stack Project is made for a handlooms business
                  which wants to display and sell their products online.
                </p>
                <p>
                  In this project, I designed the UI, layout, logo and marketing
                  graphics. While implementing it with ReactJs and Css3
                  for frontend development and using Firestore Database and
                  firebase Authentication for backend.
                </p>
              </>
            }
            link="/uniquehandlooms"
          />

          <Card
            img={AM}
            name={"AcrossMe"}
            skills={"React, Firebase"}
            website="https://acrossme.in/"
            github="https://github.com/ujjwal6792/AcrossMe-Public"
            demo=""
            desc={
              <>
                <p>
                  {" "}
                  AcrossMe is developed as an one Stop solution to explore
                  multiple shopping, grocery, travel and pharmaceutical
                  website/webapps without downloading plethora of apps.
                </p>
                <p>
                  In this project, I handled the design and development of the
                  webapp as well as working with xamarin team for the design and
                  database implementation of AcrossMe mobile app.
                </p>
              </>
            }
            link="/uniquehandlooms"
          />
        </div>
      </div>
    </>
  );
}

export default Project;

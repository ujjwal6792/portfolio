import React from "react";
import ProductPage from "../pages/ProjectPage";

function UniqueHandlooms() {
  return (
    <>
      <ProductPage
        //   introduction layout
        name="Unique Handlooms"
        introHeading="Introduction"
        introText="This full-stack Project was made for a handlooms business which wanted to display and sell their products online. In this project, I designed the UI, layout, logo and marketing graphics. While implementing it with ReactJs and vanilla Css for frontend development and using Firestore Database and firebase Authentication for backend.
        Here we have implemented the following features:"
        introLi={[
          "Responsive single page web app for mobile and web browsers.",
          "Application wide state management with react context and useReducer.",
          "User authentication and cart functions with wishlists/orders.",
          "integration with firebase for authentication, firestore database and hosting.",
          "adding CRUD for users and admin to manage wishlists and products.",
          "Pagination, image compression, category filtering and loading animations to improve  performance and user experience.",
        ]}
        introImg="https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fhomepage.webp?alt=media&token=54538aae-ce60-49d3-b8b8-90a9d7a781cb"
        // feature Description
        projectFeatures={[
          {
            featureDescription: "Responsive single page web app ",
            featureIntro: "Using react router to provide instant page switching without page reload, react hooks such as useEffect() and useState() to enhance the interactibility of our webapp and css - grid layout, flex layout, clamp() to reduce media queries as well as make a interactive nav bar for mobile and tablet devices",
            image: "https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fcategoryandfooter.webp?alt=media&token=ef2fcc5f-1dd4-42ad-b39f-6ac0f6803a5d",
            // imageMobile: "https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fmobilehome.webp?alt=media&token=d6b652b3-e63e-4ec9-8769-0084968b3eb1",
            listItems: ["our pages have a collection of elements displayed via react-router-dom and updating only the components changing with a selected Link.","using useEffect and useState hooks we applied className changes and Logic to navbar and footer making the webapp compatible with variety of devices.", "Both flexbox and grid layout (such as product category images) has been used to make the ui responsive and attractive"],
            snippet: "",
          },
          {
            featureDescription:
              "Application wide state management with react context",
            featureIntro: "asa",
            image: "img",
            imageMobile: "imgmob",
            listItems: [3, 1, 2],
            snippet: "snip",
          },
          {
            featureDescription: "User authentication and cart functions",
            featureIntro: "asa",
            image: "img",
            imageMobile: "imgmob",
            listItems: [1, 2, 3],
            snippet: "snip",
          },
          {
            featureDescription:
              "integration with firebase for authentication, firestore database and hosting",
            featureIntro: "asa",
            image: "img",
            imageMobile: "imgmob",
            listItems: [1, 2, 3],
            snippet: "snip",
          },
          {
            featureDescription:
              "Pagination, image compression, category filtering and loading animations to improve performance and user experience",
            featureIntro: "asa",
            image: "img",
            imageMobile: "imgmob",
            listItems: [1, 2, 3],
            snippet: "snip",
          },
        ]}
      />
    </>
  );
}

export default UniqueHandlooms;

import React from "react";
import ProductPage from "../pages/ProjectPage";

function Acrossme() {
  return (
    <>
      <ProductPage
        //   introduction layout
        name="AcrossMe"
        demoImage="https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Facrossme%2Flanding-acrossme.webp?alt=media&token=b73a420f-52d7-4bbc-b840-d56de4e9d19f"
        introHeading="Introduction"
        introText=" This Project was made in collaboration with AcrossMe mobile development team. In this project, I  was assigned with the task of full stack webApp development running on firebase as backend, mobile App Ui design, Web Ui design, Logo Design and marketing designs, layout, logo and marketing graphics. I used reactJs to develop the frontend of this webapp and  figma to design a basic structure for the Ui and the company logo. 
        Here we have implemented the following features:"
        introLi={[
          "Responsive single page web app for mobile and web browsers.",
          "Dynamic website layout with shopping, travel, grocery and pharmaceutical categories.",
          "Admin page with authentication and a complete CRUD suite.",
          "integration with firebase for authentication, firestore database and hosting.",
          "Added a dynamnic top deals element which displays current deals (work in progress in acrossme).",
          "Pagination, image compression, category filtering and loading animations to improve  performance and user experience.",
        ]}
        introImg="https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Facrossme%2Fam1.webp?alt=media&token=ff2144e5-74b5-41b8-95bc-4720815cabb6"

        // feature Description
        projectFeatures={[
          {
            featureDescription: "Responsive single page web app ",
            featureIntro:
              "Using react router to provide instant page switching without page reload, react hooks such as useEffect() and useState() to enhance the interactibility of our webapp and css - grid layout, flex layout, clamp() to reduce media queries as well as make a interactive nav bar for mobile and tablet devices.",
            image: [
              "",
            ],
            // imageMobile: "https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fmobilehome.webp?alt=media&token=d6b652b3-e63e-4ec9-8769-0084968b3eb1",
            listItems: [
              "our pages have a collection of elements displayed via react-router-dom and updating only the components changing with a selected Link.",
              "using useEffect and useState hooks we applied className changes and Logic to navbar and footer making the webapp compatible with variety of devices.",
              "Both flexbox and grid layout (such as product category images) has been used to make the ui responsive and attractive.",
            ],
            snippet: "",
          },
          {
            featureDescription:
              "Dynamic website layout with shopping categories",
            featureIntro:
              "With backend and admin inputs the shopping websites are categorised into their specific domains such as shopping for ecommerce, groceries for apps providing grocery facility, travel for travel, hotels and cab services and pharmaceutical for medicine and health services.",
            image: [
             
            ],
            imageMobile: "imgmob",
            listItems: [
            ],
            snippet: "",
          },
          {
            featureDescription:
              "integration with firebase for authentication, firestore database and hosting",
            featureIntro:
              "For the backend of this webapp, firebase service was used, it provides plethora of services such as firebase authentication which provides email authentication and client authentication such as google, fb, etc... , firestore database which is a non Sql database like mongoDB, firebase storage which is used to store files as firestore only handles json data with 1mb limit per document and firebase hosting is used to host our app.",
            image: [
,
            ],
            imageMobile: "imgmob",
            listItems: [
              "firestore sdk stores our products and user details in database while. when admin uploads the websites the image is stored in storage and the url is then stored on db with website details. these websites are fetched by get api with features like limit, orderby and where to filter sort and order data.",
              "user authentication is handled by firebase auth and the uid generated for the admin currently.",
              "firestore security rules are set such as only the admin can access the admin panel.",
            ],
            snippet: "",
          },
          {
            featureDescription:
              "Pagination, image compression, category filtering and loading animations to improve performance and user experience",
            featureIntro:
              "To improve the performance of the app on both desktop and mobile devices, pagination and image compression were used to decrease the server fetch time. loading screens and category filterations were also used to give users a better experience and navigation.",
            image: [
          
            ],
            imageMobile: "imgmob",
            listItems: [
              "Using image compression such as avif or webp instead of png image size reduction achieved was upto 90%, while webp giving slightly higher compression.",
              "firebase limit and orderby functions were used to limit products displayed on a page by 6 with more button.",
            ],
            snippet: "",
          },
        ]}
      />
    </>
  );
}

export default Acrossme;

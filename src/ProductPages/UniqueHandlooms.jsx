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
            featureIntro: "Using react router to provide instant page switching without page reload, react hooks such as useEffect() and useState() to enhance the interactibility of our webapp and css - grid layout, flex layout, clamp() to reduce media queries as well as make a interactive nav bar for mobile and tablet devices.",
            image: ["https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fcategoryandfooter.webp?alt=media&token=ef2fcc5f-1dd4-42ad-b39f-6ac0f6803a5d"],
            // imageMobile: "https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fmobilehome.webp?alt=media&token=d6b652b3-e63e-4ec9-8769-0084968b3eb1",
            listItems: ["our pages have a collection of elements displayed via react-router-dom and updating only the components changing with a selected Link.","using useEffect and useState hooks we applied className changes and Logic to navbar and footer making the webapp compatible with variety of devices.", "Both flexbox and grid layout (such as product category images) has been used to make the ui responsive and attractive."],
            snippet: "",
          },
          {
            featureDescription:
              "Application wide state management with react context",
            featureIntro: "For the management of user auth, user details, user details update and the bucket item details which were added to cart, react context api and reducer hook were used. By wrapping the state management component over the app component index module, the states were accesible in each and every module.",
            image: ["https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fstatemanagement.webp?alt=media&token=cced3061-16dc-4fb3-a2f7-8ef1004e0587"],
            imageMobile: "imgmob",
            listItems: ["createContext was used to create the data layer which stores the states reduced by useReducer, useContext useContext pulls the data from the data layer into an array.", "In this webapp the reducer layer stores user auth data such as user uid and login state, it stores the user's personal information in userDetailsContext to be used without fetching the data from database on every page load and also the basket data of user's wishlist and order.",],
            snippet: "",
          },
          {
            featureDescription:
              "integration with firebase for authentication, firestore database and hosting",
            featureIntro: "For the backend of this webapp, firebase service was used, it provides plethora of services such as firebase authentication which provides email authentication and client authentication such as google, fb, etc... , firestore database which is a non Sql database like mongoDB, firebase storage which is used to store files as firestore only handles json data with 1mb limit per document and firebase hosting is used to host our app.",
            image:["https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Faccount.webp?alt=media&token=b37f6f09-15d1-4fd2-89e6-2cfaafe070c3"],
            imageMobile: "imgmob",
            listItems: ["firestore sdk stores our products and user details in database while. when admin uploads the products the image is stored in storage and the url is then stored on db with product details. these products are fetched by get api with features like limit, orderby and where to filter sort and order data.", "user authentication is handled by firebase auth and the uid generated is used to create a document hence linking the user to its personal data, wishlists and orders.", "firestore security rules are set such as either the user or the admin can access user personal and order details."],
            snippet: "",
          },
          {
            featureDescription:
              "Pagination, image compression, category filtering and loading animations to improve performance and user experience",
            featureIntro: "To improve the performance of the app on both desktop and mobile devices, pagination and image compression were used to decrease the server fetch time. loading screens and category filterations were also used to give users a better experience and navigation.",
            image: ["https://firebasestorage.googleapis.com/v0/b/ujjwals-portfolio.appspot.com/o/projects%2Funiquehandlooms%2Fproductpage.webp?alt=media&token=c37da785-3f97-45ec-90e6-6cf0df42379c"],
            imageMobile: "imgmob",
            listItems: ["Using image compression such as avif or webp instead of png image size reduction achieved was upto 90%, while webp giving slightly higher compression.", "firebase limit and orderby functions were used to limit products displayed on a page by 12 with back and more buttons.", "Also products can filtered by their category from homepage and all products page to help users find their desired product easily."],
            snippet: "",
          },
        ]}
      />
    </>
  );
}

export default UniqueHandlooms;

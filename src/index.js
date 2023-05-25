// *******************PUT THIS CODE IN INDEX.JS TO RUN **************************
// FOR more info read 2_TayALBUMS.js

// THIS code shows ES-6 MODULES and stuff

import React from "react";
import ReactDOM from "react-dom/client";

import App from './FireBase Authentication/App'
// import { Albums } from "./4_Data"; 

// import Book from "./4_Book";

// import "./2_style.css"; // importing our css i.e
// //these are components


// const Booklist = () => {
//   // below function gets invoked instantly so we referenced in BOOK component
//   const getAlbum = (id) => {
//     const album = Albums.find((album) => album.id == id);
//     console.log(album);
//   };
//   return (
//     <>
//       <div className="github">
//         <a href="https://github.com/Adarshkumbar" target="_blank">
//           <img src="https://cdn.afterdawn.fi/v3/news/original/github-logo.png" />
//         </a>
//       </div>
//       <div id="heading">TAYLOR SWIFT ALBUMS</div>
//       <section className="booklist">
//         {/* 'Albums' array gets mapped to get each obj from it And we DESTRUCTURED it to use emts of OBJ and SENT AS PROPS*/}
//         {Albums.map((album, index) => {
//           const { img, author, title } = album;
//           return (
//             <Book
//               {...album}
//               key={album.id}
//               getAlbum={getAlbum}
//               number={index}
//             ></Book>
//           );
//         })}
//       </section>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

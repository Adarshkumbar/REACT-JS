// ******************* PUT THIS CODE IN INDEX.JS TO RUN **************************
// FOR more info read 2_TayALBUMS.js 

// THIS code shows ES-6 MODULES and stuff
//  2_TayALBUMS.js Same code but Split up for ease of Maintainance->.....Using ES6 modules 

// split up files are 4_Data and 4_BOOK


import React from "react";
import ReactDOM from "react-dom/client";

import { Albums } from "./4_Data";  // This is NAMED import name {Albums must be same }
// import  Albums  from "./4_Data";    // this is default import  name can be anything  also no {}

import Book from "./4_Book";    // default export 

import "./2_style.css"; // importing our css i.e
//these are components

const Booklist = () => {
  // below function gets invoked instantly so we referenced in BOOK component
  const getAlbum = (id) => {
    const album = Albums.find((album) => album.id == id);
    console.log(album);
  };
  return (
    <>
      <div id="heading">TAYLOR SWIFT ALBUMS</div>
      <section className="booklist">
        {/* 'Albums' array gets mapped to get each obj from it And we DESTRUCTURED it to use emts of OBJ and SENT AS PROPS*/}
        {Albums.map((album , index) => {
          const { img, author, title } = album;
          return <Book {...album} key={album.id} getAlbum={getAlbum} number={index}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
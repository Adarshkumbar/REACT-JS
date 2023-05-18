// *******************PUT THIS CODE IN INDEX.JS TO RUN **************************

//THERE are SEVERAL MEthods to RENDER LIKE THIS SOME OF THEM ARE COMMENTED ---->> Comment and Uncomment to use whichever you want

// 1) Destructure and Send as PROPS
// 2) Pass THE entire Obj as PROPS | PASS entire object via SPREAD OPERATOR
import React from "react";
import ReactDOM from "react-dom/client";

import "./2_style.css"; // importing our css i.e
//these are components

//*********** these objects are used as Props **********
// using to make somewhat DYNAMIN
const Albums = [
  {
    author: "Taylor Swift",
    title: "Lover",
    img: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1566606276/190822-fallon-tswift-tease_m6dcbr",
    id: 1,
  },
  {
    author: "Taylor Swift",
    title: "Reputation",
    img: "https://i1.wp.com/irishrover.net/wp-content/uploads/C_T-reputation-from-https_www.billboard.com_articles_columns_pop_7941777_taylor-swift-reputation-album-cover-make-overs.jpg?fit=1240%2C1248&ssl=1",
    id: 2,
  },
  {
    author: "Taylor Swift",
    title: "1989",
    img: "https://lastfm.freetls.fastly.net/i/u/ar0/a5820d29c7bb511ef4887e5f7cd5fa46.jpg",
    id: 3,
  },
  {
    author: "Taylor Swift",
    title: "Midnights",
    img: "https://shop.umusic.ph/wp-content/uploads/2022/09/Midnights-Blood-Moon-Edition-Vinyl-Front-1.png",
    id: 4,
  },
  {
    author: "Taylor Swift",
    title: "Red",
    img: "https://musiczone.ie/wp-content/uploads/2016/11/Taylor_Swift_Red_Album_Art_Cover.jpg",
    id: 5,
  },
  {
    author: "Taylor Swift",
    title: "Speak Now",
    img: "https://i.pinimg.com/originals/dc/86/38/dc86380f4c1c8169ab42f4b12db41ae0.jpg",
    id: 6,
  },
  {
    author: "Taylor Swift",
    title: "Folklore",
    img: "https://i1.wp.com/thehappening.com/wp-content/uploads/2020/07/taylor-swift-folklore.jpg?fit=1480%2C833&ssl=1",
    id: 7,
  },
  {
    author: "Taylor Swift",
    title: "Evermore",
    img: "https://cehsnews.com/wp-content/uploads/2021/01/image.jpeg",
    id: 8,
  },
  {
    author: "Taylor Swift",
    title: "Fearless",
    img: "https://cdn.shoplightspeed.com/shops/634895/files/24203920/taylor-swift-fearless-platinum-edition.jpg",
    id: 9,
  },
  {
    author: "Taylor Swift",
    title: "Taylor Swift",
    img: "https://www.udiscovermusic.com/wp-content/uploads/2018/09/Taylor-Swift-debut-album-cover-web-optimised-820-820x600.jpg",
    id: 10,
  },
];

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
        {Albums.map((album,index) => {
          const { img, author, title } = album;
          return (
            // <Book author={author} title={title} img={img} key={album.id} getAlbum={getAlbum}>
            // OR
            // { Passing entire Obj   and index has values from 0 - n
            <Book {...album} key={album.id} getAlbum={getAlbum} number = {index}>
              {/* > ---.>>> USE WHEN THERE ARE 100's of emts in an ARRAY} */}

              {/* <button>Click me</button> */}
              {/* above thing only renders if children props is used */}
            </Book>
          );
        })}

        {/* Below code for each album is unnecessary cuz WE use MAP which iterates over every object and we are sending "EMts of" each obj by DESTRUCTURING as above*/}

        {/* <Book
        author={secondAlbum.author}
        title={secondAlbum.title}
        img={secondAlbum.img}
      />
      <Book
        author={thirdAlbum.author}
        title={thirdAlbum.title}
        img={thirdAlbum.img}
      />
      <Book
        author={fourthAlbum.author}
        title={fourthAlbum.title}
        img={fourthAlbum.img}
      />
      <Book
        author={fifthAlbum.author}
        title={fifthAlbum.title}
        img={fifthAlbum.img}
      />
      <Book
        author={sixthAlbum.author}
        title={sixthAlbum.title}
        img={sixthAlbum.img}
      />*/}
      </section>
    </>
  );
};

//Using 'props' which is a keyword returns an object
/*Use children props -->chilren(keyword) which used to use emts in between the Components like <compe ----> xyz..emts  </compe>-> xyz...emts wouldnt be rendered if ''children'' was not used .Commented below */
const Book = (props) => {
  // console.log("id:", props.id);
  // console.log(props);

  const { img, title, author, getAlbum, id ,number} = props; // ------ Destructuring --------

  //this function help in referencing the funtion passed from above i.e getAlbum (id)
  const getSingleAlbum = () => {
    getAlbum(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {/* <p>{children}</p> */}
      {/* <h4>{props.id}</h4> */}
      <p>{id}</p>

      {/* below referenced not function invoked as -><button onClick={getAlbum(id)}>Click me</button> ------.>>>> this wont work  */}

      {/* 1st APPROACH  this requires the getSingleAlbum = () =>{getAlbum(id) } */}
      {/* <button onClick={getSingleAlbum}>Click me</button> */}

      {/* 2nd APPROACH  this doesnt need an Funtion to be created like above i.e  const getSingleAlbum = () =>{getAlbum(id) }*/}
      <button
        onClick={() => {
          getSingleAlbum;
        }}
      >
        Click me
      </button>

{/* Adding number from Array using index i.e 0 - n */}
      <span className="number">{`# ${number + 1}`}</span>

    </article>
  );
};

// alternative way
/*
const Image = () => (
  <img src="" />
);
const Title = () => <h2>Lover</h2>;
const Author = () => {
  const inlineHeadingStles = {
    color: "#617d98",
    fontSize: "0.83rem",
    marginTop: "0.5rem",
  };
  // inline css acts like an obj in REACT. created Above obj and used below....we can also code css below only
  return <h3>Taylor Swift</h3>;
};

  // inline css acts like an obj in REACT. 
// const Author = () => {
//   const inlineHeadingStles = {
//     color: "#617d98",
//     fontSize: "0.83rem",
//     marginTop: "0.5rem",
//   };
// created Above obj and used below....we can also code css below only
//   return <h3 style={inlineHeadingStles}>Taylor Swift</h3>;
// };
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);

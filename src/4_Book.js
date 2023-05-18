// This is module
// Which Has Component which needed by 4_ES6_MODULES or index.js so we are EXPORTING

// export BOOK = (props) =>{}   //NAMED EXPORT 
const Book = (props) => { 
  // console.log("id:", props.id);
  // console.log(props);

  const { img, title, author, getAlbum, id , number } = props; // ------ Destructuring --------

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
      {/* <p>{id}</p> */}
      <span className="number">{`#${number+1}`}</span>  
      {/* <button
        onClick={() => {getAlbum(id);}}> Click me</button> */}
    </article>
  );
};

export default Book
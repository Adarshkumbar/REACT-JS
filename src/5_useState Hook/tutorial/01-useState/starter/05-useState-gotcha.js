import { useState } from "react";

const UseStateGotcha = () => {
  const [value , setValue ] = useState(0)
  
  const handleClick = () =>{
    setValue(value+1)   //this is ahead than below 
    console.log(value);
    // what we can do is
//     setValue(()=>{
//       return x+1
//     })
    } 
  return (
    <>
      <h1>useState "gotcha"</h1>
      <h2>{value}</h2>
      <button type="buttun" className="btn " onClick={handleClick}>increase</button>
    </>
  );
};

export default UseStateGotcha;

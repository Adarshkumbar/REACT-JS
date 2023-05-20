
// "useState" Simple Counter program that shows number of times clicked
import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('lool','ff'
  // ));
  // let val = useState('x')[0]
  // console.log(val);

  const [count, setCount] = useState(0); // Destructuring it--->HERE count and  x of useState(x) can have any value ....setCount /any name is a funtion

  const handleButton = () =>{
      setCount(count+1)
  }
  return (
    <>
      <h2>useState basics</h2>
      <h4>You Clicked {count} times </h4>
      <button type="button" className="btn" onClick={handleButton}>click me</button>
    </>
  )
};
console.log('gege');
export default UseStateBasics;

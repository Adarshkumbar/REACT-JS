import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // multiple use effects below
  useEffect(() => {
    console.log("hello from first useEffect");
  }, []); // * also [value] true ->run every time state value changes
  //  * also [value,secondValue] true -> run every time state value or secondValue or both  changes
  useEffect(() => {
    console.log("hello from second useEffect");
  }, []); // also [value] ,[value,secondValue] ,[secondValue]
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;

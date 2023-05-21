import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello there");
  };
  sayHello();

  // if you think this will render only once --"WRONG"

  // it renders Every time we click button i.e Re-renders (state change)
  // i.e even though we wanted it to render once it renders every state change

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;

import React from "react";
import ReactDOM from "react-dom/client";

// this is component
function Greet() {
  return <h1>First Component</h1>;
}
// Creating ROOT from HTML and to inject in it
const root = ReactDOM.createRoot(document.getElementById("root"));

// pass the component here to run
root.render(<Greet />);

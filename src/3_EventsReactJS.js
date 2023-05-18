// *******************PUT THIS CODE IN INDEX.JS TO RUN **************************
// Some events like onClick , onSubmit and onChange are discussd here
import React from "react";
import ReactDOM from "react-dom/client";


const EventExamples = (e) => {
  //below are Callback functions
  const handleFormInput = (e) => {
    // for changeEvent i.e onChange
    console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault(); // this prevent generic submission i.e sending to db or backend
    console.log("Form submitted");
  };

  return (
    // below is for event handling like onClick,onSubmit,onChange
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>The FORM</h2>
        {/* below and  above are callback funtions  handleForm Submission/input and  handleButtonClick */}
        <input
          type="text"
          name="name_of_FORM "
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick}>Click</button>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventExamples />);

import { useState } from "react";

const UseStateObject = () => {
  // (A)below are use states with value set already
  // const [name, setName] = useState("Adie");
  // const [age, setAge] = useState(21);
  // const [hobby, setHobby] = useState("Gaming");

  //Best way to do above is (B) below and function is also set for B
  //Here instead of creating individual we create an Object
  const  [person, setPerson]  = useState({
    name: "Levi",
    age: 25,
    hobby: "Killing Titans",
  });

  //(A) this function calls functions of useStates to change state values......
  // const displayPerson = () => {
  //   setName("Spoo");
  //   setAge(21);
  //   setHobby("Watchin Shows");
  // };

  //Best way to do above is (B) below function is set to change state values of (B)

  const displayPerson = () =>{
    // setPerson({name :" Lelouch " , age : 21 , hobby : "Playing with minds "})  // setting this as Object cuz State value is also Object

    //  setPerson({ name: " XYZ " }); this overrites name but Other values removed 

    //below code only overrites specific values of State Value object (B)
    setPerson({...person , name : " Iron Man "})  // here spread operator used and only name field chaged 
  }

  return (
    <>
      <h2 style={{ color: "red" }}>useState object example</h2>
      {/* Below is for (A) */}
      {/* <h3>{name}</h3>
      <h4>{age}</h4>
      <h3>Likes {hobby}</h3> */}

      {/* Below is for (B) */}
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h3>Likes {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show other Hobby
      </button>
    </>
  );
};

export default UseStateObject;

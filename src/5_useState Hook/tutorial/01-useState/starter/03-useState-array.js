//************************* GOING TO IMPORT IT IN INDEX.JS TO RUN IT */

// ADDING AND DELETING EMTS FROM DOM

import { useState } from "react";
import { data, people } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // console.log(people); // this gives entire array of people

  // Function to remove and item
    const removeItem = (id) =>{
      console.log(id);
      const newPeople = people.filter((person)=> person.id !==id)   // here we are getting all emts whose id doesnt match 
          setPeople(newPeople)
          // console.log(newPeople);
  }

  //Funtion to remove all items
   const clearAllItems = () => {
     setPeople([]); // this makes ARRAY EMPTY and DOM ITEMs will be removed
   };

  return (
    <div>
      <h2>useState array example</h2>
      {
        // Adding Emts to DOM using below code
        people.map((person) => {
          // console.log(person);
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type="button" onClick={()=>removeItem(id)}>remove</button>
            </div>
          );
        })
      }
      <button
        type="button"
        className="btn"
        onClick={clearAllItems} // This is called to Clear all ITEMS
        style={{ marginTop: "2rem", background: "blue" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;

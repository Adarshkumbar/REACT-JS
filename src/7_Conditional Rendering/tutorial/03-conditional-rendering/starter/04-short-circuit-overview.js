import { useEffect, useState } from "react";


// Conditional Rendering for React component or Hooks
// we are using && , || and !  (logical statements ) and ternerary operator because if else conditions wont work on Hooks 
// like.....  
//            if(condition){
//                 useEffect(,[])
//             }
//             else{
//                const [condition, setCondition] = useState(true);
//              }
const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("Crazy");

  const codeExample = text || "hello world";

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || "hello world"}</h4>
      <h4>Falsy AND {text && "hello world"}</h4>
      <h4>Truthy OR {name || "hello world"}</h4>
      <h4>Truthy AND {name && "hello world"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;

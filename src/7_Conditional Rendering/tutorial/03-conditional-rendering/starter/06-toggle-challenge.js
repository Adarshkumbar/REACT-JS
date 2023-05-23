import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setshowAlert] = useState(false);
  const toggleAlert = () => {
    //i..e if true
    if (showAlert) {
      setshowAlert(false);
      return;
    }
    setshowAlert(true);
  };
  // useEffect(()=>
  //   {const toggle = ()=>value ?setValue(false) : setValue (true)
  //   toggle()}
  // ,[])
  return (
    <div>
      {/* <button className="btn" onClick={toggleAlert}>toggle</button> */}
      {/* above also can be done as */}
      <button className="btn" onClick={()=>setshowAlert(!showAlert)}>toggle </button>
      {/* below one component runs if showAlert is true else  id doesnt*/}
      {showAlert && <Alert />}
    </div>
  );
};

//Another coomponent

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;

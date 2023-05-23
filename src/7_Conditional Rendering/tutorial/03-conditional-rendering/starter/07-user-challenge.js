import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  // console.log(user|| 'xx');

  const login = () =>{
    // usually connect to database or api ...not done this 
      setUser({name:"Adarsh"})
  }

  const logout = () => {
      setUser(null);
  }

  return (
    <>
      <h2 style={{fontFamily:"cursive"}}>user challenge</h2>
      {/* setting up ternery operator to render what we want i.e login or logout */}
      {user ? (
        <div>
          <h4>Hello,{user.name}</h4>
          <button
            className="btn"
            onClick={logout}
            style={{ background: "red" }}
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button
            className="btn"
            onClick={login}
            style={{ background: "blue" }}
          >
            login
          </button>
        </div>
      )}
    </>
  );

};

export default UserChallenge;

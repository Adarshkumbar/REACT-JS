import {} from "./App";
import { useState } from "react";

// import below
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password) // this returs promise so then and catch used
      //auth is imported from firebase.js which has auth --====> auth has info about firebaseConfig which db ,api key application key etc about our project
      .then((auth) => {
        navigate("/home");
      }) // this is where we want to route
      .catch(console.error);
  };
  //Either above or below i.e signin / signup we need to send user to homepage/dashboard..to do that we use ROUTER
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password) // same as above
      .then((auth) => {
        navigate("/home");
      }) // this is where we want to route
    .catch((error) => console.log(error));
  };
  return (
    <div className="div">
      <h1 className="h1">Sign-in</h1>
      <label className="label">E-mail</label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="off"
        className="input"
        type="email"
        name="email"
      />
      {/* event is taken when user enters it   */}{" "}
      {/* event.target.value is the actual value  */}
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        className="input"
        type="email"
        name="email"
      />
      <button onClick={signIn} className="button">
        Sign In
      </button>
      <p>Agree to bullshit</p>
      <button onClick={register} className="Button">
        SignUP
      </button>
    </div>
  );
}
export default Login;
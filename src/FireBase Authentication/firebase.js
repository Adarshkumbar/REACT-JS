// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from "firebase/auth" // this i created

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnRmI0h8PPuPsd2pUnU-nW8y6egqGBJ1w",
  authDomain: "authenticate-new.firebaseapp.com",
  projectId: "authenticate-new",
  storageBucket: "authenticate-new.appspot.com",
  messagingSenderId: "850253405452",
  appId: "1:850253405452:web:723da2abaf21af600efd29",
  measurementId: "G-L41DNSS5FG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//this i created 
const auth = getAuth(app);

export {auth}


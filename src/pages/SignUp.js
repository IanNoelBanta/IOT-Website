// import "./SignUp.css";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import { useState } from "react";

import {
  createBrowserRouter,  
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAryp59TRQdG60gnbI8v7jeXatwbrPJ8VY",
  authDomain: "group-c-weather-station.firebaseapp.com",
  databaseURL:
    "https://group-c-weather-station-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "group-c-weather-station",
  storageBucket: "group-c-weather-station.appspot.com",
  messagingSenderId: "923286028127",
  appId: "1:923286028127:web:411d78817ac911d14880ea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const SignUp = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleRegister = () => {

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("BOOM REGISTERED!");
      navigate("/Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR TANGA!");
      console.log(errorMessage);
    });
  };

  return (
    <div className="sign-up">
      <img className="background1" alt="" src="/bg2.jpg" />
      <div className="signbox"></div>
      <div className="sign-up1">Sign Up</div>
      <div className="e-mail">E-mail</div>
      <div className="name">
        <p className="name1">Name</p>
      </div>
      <input className="placeholder" type="text" name="name" id="name" placeholder="Enter your name" onChange={handleNameChange} value={userName}/>
      <input className="placeholder1" type="text" name="Email" id="Email" placeholder="Enter your email" onChange={handleEmailChange} value={userEmail}/>
      <input className="placeholder2" type="text" name="Pass" id="Pass" placeholder="Enter your password" onChange={handlePasswordChange} value={userPassword}/>
      <div className="password">Password</div>
      <div className="already-have-an">Already have an account?</div>
      <Link to="/Login"><button className="sign-in">Sign In</button></Link>
      {/* <div className="sign-up-child" /> */}
      <button className="create-an-account" onClick={handleRegister}>Create An Account</button>

    </div>
  );
};

export default SignUp;

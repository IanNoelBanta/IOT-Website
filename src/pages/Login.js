import "../styles/Login.css";

import { useState } from "react";

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,  
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// import firebaseConfig from "../utils/FirebaseConfig"


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmitLogin = () => {

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("BOOM NAKAPASOK KA TANGA!");
        navigate("/DashboardHome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR TANGA!");
        console.log(errorCode);
      });
  };

  const redirectToSignUp = () => {
    navigate("/SignUp");
  }




  return (
    <div className="login">
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <div className="objectother-03">
        <img
          className="objectother-03-icon"
          alt=""
          src="/objectother-03@2x.png"
        />
      </div>
      <div className="welcome-back">Welcome Back!</div>
      <div className="e-maill">E-mail</div>
      <div className="passwordd">Password</div>
      <input className="placeholderr" name="Email" id="Email" type="text" required onChange={handleEmailChange} value={userEmail}/>
      <input className="placeholder11" name="Pass" id="Pass" type="password"  required onChange={handlePasswordChange} value={userPassword}/>
      <button className="login-button" onClick={handleSubmitLogin}>Login</button >
      <div className="dont-have-and-container">
        <span>
          <span>Don’t have an account?</span>
          <span className="span">{` `}</span>
        </span>
        <span className="span">
          <button className="register1" onClick={redirectToSignUp}>Register</button>
        </span>
      </div>
      
      <p class="hidden">
        {userEmail} {userPassword}
      </p>
    </div>

    
  );
};

export default Login;

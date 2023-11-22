import { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import DashboardHome from "./DashboardHome";

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
  const [user, setMessage] = useState("");
  const [pass, setPassword] = useState("");
  const [displayUser, setDisplayUser] = useState("");
  const [displayPass, setDisplayPass] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLogin = () => {
    setDisplayUser(user);
    setDisplayPass(pass);

    signInWithEmailAndPassword(auth, user, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("BOOM NAKAPASOK KA TANGA!");
        navigate("/DashboardHome");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR TANGA!");
        console.log(errorCode);
      });
  };

  return (
    <>
      <label>
        Username:{" "}
        <input
          type="text"
          id="user"
          name="user"
          onChange={handleChange}
          value={user}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          id="pass"
          name="pass"
          onChange={handleChangePass}
          value={pass}
        />
      </label>
      <hr />
      <button className="login-button" onClick={handleSubmitLogin}>
        LOGIN
      </button>
      <hr />
      <p>
        {displayUser} {displayPass}
      </p>
    </>
  );
};

export default Login;

// import "./SignUp.css";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up1">Sign Up</div>
      <img
        className="cloudy-climes-high-resolution-icon"
        alt=""
        src="/cloudyclimeshighresolutionlogoblacktransparent-1@2x.png"
      />
      <div className="your-weather-journey">
        Your weather journey begins now – sign up and ride the storm of
        precision with us!
      </div>
      <div className="e-mail">E-mail</div>
      <div className="name">
        <p className="name1">Name</p>
      </div>
      <input className="placeholder" type="text" />
      <input className="placeholder1" type="text" />
      <input className="placeholder2" type="text" />
      <div className="password">Password</div>
      <div className="already-have-an">Already have an account?</div>
      <button className="sign-in">Sign In</button>
      <div className="sign-up-child" />
      <div className="create-an-account">Create An Account</div>
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <img className="saly-1-icon" alt="" src="/saly1@2x.png" />
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LogingPopup.css";

const LogingPopup = ({ setShowloging }) => {
  const [curState, setCurState] = useState("login");

  return (
    <div className="logig-popup">
      <form className="loging-popup-container">
        <div className="loging-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowloging(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loging-popup-inputs">
          {curState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{curState === "Sign up" ? "Create account" : "login"}</button>
        <div className="loging-popup-condition">
          <input type="checkbox" required />
          <p>By continuning, i agree to the term of use & privacy policy.</p>
        </div>
        {curState === "login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogingPopup;
